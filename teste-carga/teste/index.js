import http from "k6/http";
import { check, group, sleep } from "k6";

const BASE_URL = "https://vgglxtghug.execute-api.us-east-1.amazonaws.com";
const token = 'Bearer eyJraWQiOiI4TGQ5b0QyOGJVbVIrdlY3TXlJZCswOEFIVm82SjJYY0VrM1p1eGF3eWFRPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiIwOGIxYTBiNS03N2EyLTQwM2YtYmEyMi1jNTI2YjYxMWJkNDgiLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtZWFzdC0xLmFtYXpvbmF3cy5jb21cL3VzLWVhc3QtMV96RnZSbmJKNFUiLCJjbGllbnRfaWQiOiIyNzhmbWltZnA3cGw0OGhzNTJqbmN0aWhsZyIsIm9yaWdpbl9qdGkiOiI2Njk5NjViMi02YTZlLTRhNzctODM4OC1hODg1MTU5Yzg1MWUiLCJldmVudF9pZCI6Ijg1NTY5ZjgxLTM0ZTctNDM3Yi05MmE0LTUxNjIxYWQ3MTY1MSIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE3MjE3NzI0NjEsImV4cCI6MTcyMTc3NjA2MSwiaWF0IjoxNzIxNzcyNDYxLCJqdGkiOiI5NDcwN2VlZC1kNDBmLTQ1ZDEtOWQ1MC0yNTAzZWZjNjA3ZDIiLCJ1c2VybmFtZSI6Im1lZGljbzEifQ.YUQj0mNuYI1WwoJbGFvlEdXhGNctAkVfdDZvY0YU9ybrkTMBdFZjiV4oRNMbVM_52dQhcLNzOCoAy7u-6VlISHgmlNKRMyCGDexRiN31vh1z1npI6aawOgt4W4g87XMqZvq-Sy0RthPECvRgucBQ4gGRJsBUDsEynUlJvm0drI5aQ0QRuXnTcJMYSM---Gu6EQb8x2CgeLeSHmLaswhAGqcd0FECT-NjnXXsAj_kXAH6A_QMsxX60eRjL7SngfTc65YCVqAxucLSTCw6c0N_NOAhfyKQUy3mH-nV5bc-3zbV_kEM_cWIZuMSzniXmDbEQ0WCMOi7hAhstdtM8zuWJQ';
const PORT_AUTH = "";
const PORT_CONSULTA = "";
const SENHA_DEFAULT = "123456";

export let options = {
    stages: [
        { duration: '10s', target: 2 },
        { duration: '10s', target: 5 },
        { duration: '10s', target: 0 },
    ],
};

export default () => {
    group("cadastrar_usuario", () => {
        if (headOrTail()) {
            const cpf = generateRandomCPF();
            const nome = generateRandomNome();
            const email = generateRandomEmail(nome, cpf);
            const body = { cpf, nome, email, senha: SENHA_DEFAULT };
            http.post(`${BASE_URL}${PORT_AUTH}/autenticacao/cadastrar/paciente`, body);
        } else {
            const crm = generateRandomCRM();
            const nome = generateRandomNome();
            const email = generateRandomEmail(nome, crm);
            const body = { crm, nome, email, senha: SENHA_DEFAULT, especialidade: generateRandomEspecialidade() };
            http.post(`${BASE_URL}${PORT_AUTH}/autenticacao/cadastrar/medico`, body);
        }
        check(res => res.status === 200, { "status is 200": res => res.status === 200 });
        sleep(3);
    });

    group("autenticar", () => {
        if (headOrTail()) {
            const cpf = generateRandomCPF();
            const body = { cpf, senha: SENHA_DEFAULT };
            http.post(`${BASE_URL}${PORT_AUTH}/autenticacao/autenticar/paciente`);
        } else {
            const crm = generateRandomCRM();
            const body = { crm, senha: SENHA_DEFAULT };
            http.post(`${BASE_URL}${PORT_AUTH}/autenticacao/autenticar/medico`);
        }
        check(res => res.status === 400, { "status is 400": res => res.status === 400 });
        sleep(3);
    });

    group("cadastrar_agenda", () => {
        const crm = generateRandomCRM();
        const horario = generateRandomHorario();
        const body = { crm, horario };
        http.post(`${BASE_URL}${PORT_CONSULTA}/agenda/cadastrar`, body, { headers: { Authorization: token } });
        check(res => res.status === 201, { "status is 201": res => res.status === 201 });
        sleep(3);
    });

    group("buscar_agenda", () => {
        http.get(`${BASE_URL}${PORT_CONSULTA}/agenda/buscar`, { headers: { Authorization: token } });
        check(res => res.status === 200, { "status is 200": res => res.status === 200 });
        sleep(3);
    });

    group("listar_consultas", () => {
        let busca = headOrTail() ? generateRandomCRM() : generateRandomCPF();
        http.get(`${BASE_URL}${PORT_CONSULTA}/consulta/listar?crmOrCpf=${busca}`, { headers: { Authorization: token } });
        check(res => res.status === 200, { "status is 200": res => res.status === 200 });
        sleep(3);
    });

    function generateRandomCPF() {
        const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);
        let cpf = Array.from({ length: 9 }, () => rand(0, 9));

        const calculateCheckDigit = (cpf, factor) => {
            const sum = cpf.reduce((acc, val, index) => acc + val * (factor - index), 0);
            const remainder = sum % 11;
            return remainder < 2 ? 0 : 11 - remainder;
        };

        const firstCheckDigit = calculateCheckDigit(cpf, 10);
        cpf.push(firstCheckDigit);

        const secondCheckDigit = calculateCheckDigit(cpf, 11);
        cpf.push(secondCheckDigit);

        return cpf.join("");
    }

    function generateRandomCRM() {
        const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);
        let crm = Array.from({ length: 6 }, () => rand(0, 9));

        return crm.join("");
    }

    function generateRandomNome() {
        const nomes = ["João", "Maria", "José", "Pedro", "Ana", "Paulo", "Carlos", "Mariana", "Juliana", "Lucas"];
        const sobrenomes = ["Silva", "Santos", "Oliveira", "Pereira", "Almeida", "Ferreira", "Ribeiro", "Carvalho", "Gomes", "Martins"];
        return nomes[Math.floor(Math.random() * nomes.length)] + " " + sobrenomes[Math.floor(Math.random() * sobrenomes.length)];
    }

    function generateRandomEspecialidade() {
        const especialidades = ["Cardiologia", "Dermatologia", "Endocrinologia", "Ginecologia", "Neurologia", "Ortopedia", "Pediatria", "Psiquiatria", "Urologia"];
        return especialidades[Math.floor(Math.random() * especialidades.length)];
    }

    function generateRandomEmail(nome, doc) {
        return nome.toLowerCase().replace(" ", ".") + doc + "@gmail.com";
    }

    function generateRandomHorario() {
        const year = 2024;
        const month = Math.floor(Math.random() * 12) + 1;
        const day = Math.floor(Math.random() * 28) + 1;
        const hour = Math.floor(Math.random() * 24);
        return `${year}-${month < 10 ? "0" + month : month}-${day < 10 ? "0" + day : day}T${hour < 10 ? "0" + hour : hour}:00:00Z`;
    }


    function headOrTail() {
        return Math.random() >= 0.5;
    }
}