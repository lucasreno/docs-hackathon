<p align="center"><img src="assets/logo.png" alt="Health&Med"/></p>

### FIAP - Hackathon 2024 - SOAT4 - Grupo 11 
- Alexandre Mikio Kimura Fukano - **RM 351127** (alexandremkimura@hotmail.com)
- Lucas Proença Renó - **RM 351351** (lucasreno9@gmail.com)
- Matheus Agusuto Leme Matiazzo - **RM 351128** (mathmatiazzo@gmail.com)
- Vinicius Carloto Carnelocce - **RM 351126** (viniciuscarloto@gmail.com)

---

### Links úteis
[![Hackathon 2024](https://img.shields.io/badge/Hackathon%20(.pdf)-2024-blue?logo=readthedocs)](/assets/hackathon-soat.pdf)
[![Documentação](https://img.shields.io/badge/Documentação%20Projeto-044464?logo=github)](https://github.com/lucasreno/docs-hackathon/)
<br>
[![Infraestrutura](https://img.shields.io/badge/Infraestrutura-gray?logo=github)](https://github.com/MMatiazzo/infra-hackathon)
[![Microsserviço-Autenticacao](https://img.shields.io/badge/Microsserviço%20Autenticação-gray?logo=github)](https://github.com/MMatiazzo/autenticacao)
[![Microsserviço-Consulta](https://img.shields.io/badge/Microsserviço%20Consulta-gray?logo=github)](https://github.com/MMatiazzo/consulta)

## Sumário
1. [Identificação do problema](#identificação-do-problema)
2. [Domain Driven Design](#domain-driven-design)
3. [Diagramas](#diagramas)
    - [Modelo entidade-relacionamento](#1-modelo-entidade-relacionamento)
    - [Diagramas de sequência](#2-diagramas-de-sequência)
    - [Diagrama de status](#3-diagrama-de-status)
    - [Diagrama de fluxo](#4-diagrama-de-fluxo)
4. [Infraestrutura](#infraestrutura)
5. [Microsserviços](#microsserviços)

## Identificação do problema
Os estudos baseiam-se em uma startup de telemedicina, que viabiliza a realização de consultas médicas online. Nosso objetivo é criar um sistema eficiente e seguro para conectar médicos e pacientes. Com este sistema, os pacientes poderão agendar consultas. Além disso, os médicos terão acesso ao prontuário eletrônico dos pacientes, respeitando as permissões concedidas por eles. O sistema também facilitará a gestão das agendas médicas, permitindo que os pacientes vejam os horários disponíveis e agendem consultas de forma prática e conveniente.

## Domain Driven Design
A partir do problema proposto, foi realizada uma análise do domínio do negócio, identificando os principais subdomínios e a linguagem ubíqua. Com base nessa análise, foram elaborados os fluxos de eventos e os domain storytelling, que serviram de base para a criação dos diagramas de modelagem, bem como outros diagramas que auxiliam na compreensão do sistema.
[Documentação completa (leia mais...)](/ddd/README.md)

### Diagramas

Após a análise do domínio, iniciamos a modelagem do sistema, criando os diagramas que representam a estrutura e o comportamento do sistema. Os diagramas foram elaborados com o intuito de facilitar a compreensão do sistema e auxiliar no desenvolvimento dos microsserviços.
Para visualizar os diagramas, clique nos links abaixo.

#### 1. [Modelo entidade-relacionamento](diagramas/modelo-entidade-relacionamento.md)
Este diagrama representa as entidades e seus relacionamentos, bem como os atributos de cada entidade. Ele ainda não está dividido por microsserviços, pois foi criado com o intuito de representar o sistema como um todo.

#### 2. [Diagramas de sequência](diagramas/sequencia.md)
Os diagramas de sequência representam a interação entre os componentes do sistema, mostrando a ordem das mensagens trocadas entre eles. Foram criados diagramas de sequência para os principais casos de uso do sistema.

#### 3. [Diagrama de status](diagramas/status.md)
O diagrama de status representa o ciclo de vida de uma consulta.

#### 4. [Diagrama de fluxo](diagramas/fluxo-endpoints.md)
O diagrama de fluxo representa o fluxo de execução do sistema, mostrando os endpoints e as ações realizadas por cada um deles.

### Infraestrutura
A infraestrutura foi modelada utilizando o Terraform, que permite a criação de infraestrutura como código. A infraestrutura foi dividida em módulos, que representam os recursos necessários para a execução dos microsserviços. A cloud escolhida foi a AWS, que oferece uma série de serviços que atendem às necessidades do sistema. Para automatizar o deploy da infraestrutura, foi utilizado o Github Actions, que executa o Terraform e faz o deploy dos recursos na AWS.

- #### Serviços AWS
  | Serviço    | Descrição                    |
  |------------|------------------------------|
  | S3         | Storage                      |
  | RDS        | Banco de dados relacional    |
  | SQS        | Fila de mensagens            |
  | ECR        | Registro de contêineres      |
  | EKS        | Kubernetes cluster           |
  | SNS        | Serviço de notificações      |
  | Lambda     | Funções serverless           |
  | Cognito    | Serviço de autenticação      |
  | API Gateway| Gateway de APIs              |

- #### Arquitetura
  ![Arquitetura](arquitetura/hackathon-infra.drawio.png)

- #### Stack
  | Ferramenta      | Descrição                    |
  |-----------------|------------------------------|
  | Terraform       | Infraestrutura como código   |
  | Helm            | Gerenciador de pacotes       |
  | Github Actions  | CI/CD                        |
  | Docker          | Contêineres                  |
  | Kubernetes      | Orquestrador de contêineres  |



### Microsserviços
Os microsserviços foram desenvolvidos utilizando o TypeScript, utilizando o NestJS, que é um framework para Node.js. Todos os microsserviços foram containerizados com o Docker e possuem workflows de CI/CD no Github Actions para automatizar o deploy. De acordo com a delimitação de contexto, foram criados quatro microsserviços: **autenticação, consulta, prontuário e notificação**.

- #### Clean Architecture
  A arquitetura dos microsserviços foi baseada na Clean Architecture, que é uma arquitetura de software que visa separar as responsabilidades em camadas, facilitando a manutenção e a evolução do sistema. Segue abaixo a representação da arquitetura implementada nos microsserviços:
  ![Clean Architecture](arquitetura/hackathon-clean-arch.drawio.png)

- ####

### Todo
- [x] Criar infraestrutura
  - [x] Adicionar Github Actions
- [x] Criar microsserviços autenticação (Math)
  - [x] Adaptar cliente -> médico e paciente
- [x] Criar microsserviços consulta (Math + Ale)
  - [x] Modelar banco de dados
  - [x] Implementar CRUD de horários
  - [x] Implementar agendamento de consulta
  - [x] Implementar listagem de horários disponíveis
  - [x] Implementar listagem de consultas agendadas
  - [x] Implementar aceite/recusa de consulta
  - [x] Testes de estresse (sistema deve suportar 20.000 usuários simultâneos)
- [x] Diagramas
  - [x] Diagrama da infraestrutura (Lucas)
  - [x] Modelagem Entidade-Relacionamento (Lucas)
  - [x] Storytelling (egon.io) (Carloto)
  - [x] Diagrama de sequência (Lucas)
  - [x] Diagrama de status (Lucas)
  - [x] Diagrama de fluxo com Endpoints (Lucas)
    - [x] Finalizar diagrama de fluxo com os endpoints que faltam desenvolver (Lucas)
  - [x] Diagrama padrão SAGA (Lucas)
  - [x] Diagrama Clean Architecture (Lucas)
- [x] LGPD (Lucas)
  - [x] RIPD (Lucas)
- [ ] Documentação
  - [ ] Registro corbertura de testes (auten > mat e cons > ale)
  - [ ] Relatório SonarQube
  - [x] Relatório OWASP ZAP
  - [ ] Saga coreografada
- [x] Fechar todas as branches

### Ideias
- Performance: Separar banco de dados de leitura e escrita
- Motivo de agregar agenda e consulta: Os domínios estão muito próximos e tem relação, a separação elevaria a complexidade sem justificativa clara
- Procurar uma maneira de implementar RESILIÊNCIA COM CIRCUIT BREAKER
- Documentar: Consulta 50min médico só pode agendar de hora em hora
- Se der tempo: Cobertura de testes (80%)

Considerações:
Douglas caminho certo
MVP > Depois outros pontos
Sprint
Alta disponbilidade
Inserir ElasticSearch - Grafana

### LGPD
#### 1. [Relatório de Impacto à Proteção de Dados](RIPD_Grupo_11_SOAT4.md)


#### Qualidade de código
- SonarQube

#### Monitoramento
- CloudWatch

#### Documentação
- Swagger

#### Segurança
- OWASP ZAP