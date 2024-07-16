erDiagram
    PACIENTE {
        string cpf PK
        string email "UNIQUE"
        string nome
    }
    
    MEDICO {
        string crm PK
        string email "UNIQUE"
        string nome
        string especialidade
    }

    AGENDA {
        int id PK "AI"
        string crm_medico FK
        timestamp data_horario
    }
    
    CONSULTA {
        int id PK "AI"
        string cpf_paciente FK
        string crm_medico FK
        date data_horario
        string status "['Solicitada', 'Aceita', 'Recusada', 'Cancelada']"
        boolean realizada
    }
    
    ARQUIVO {
        int id PK "AI"
        string cpf_paciente FK
        string url_arquivo
        string descricao
    }

    AUTORIZACAO_ACESSO {
        int id PK "AI"
        int id_prontuario FK
        string crm_medico FK
        boolean autorizado
    }

    ARQUIVO ||--o{ AUTORIZACAO_ACESSO: possui
    MEDICO ||--o{ AGENDA: disponibiliza
    MEDICO ||--o{ CONSULTA: realiza
    MEDICO ||--o{ AUTORIZACAO_ACESSO: solicita    
    PACIENTE ||--o{ CONSULTA: solicita
    PACIENTE ||--o{ ARQUIVO: possui