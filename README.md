<p align="center"><img src="assets/logo.png" alt="Health&Med"/></p>

### FIAP - Hackathon 2024 - SOAT4 - Grupo 11 
- Alexandre Mikio Kimura Fukano - **RM 351127** (alexandremkimura@hotmail.com)
- Lucas Proença Renó - **RM 351351** (lucasreno9@gmail.com)
- Matheus Agusuto Leme Matiazzo - **RM 351128** (mathmatiazzo@gmail.com)
- Vinicius Carloto Carnelocce - **RM 351126** (viniciuscarloto@gmail.com)

---
[![Hackathon 2024](https://img.shields.io/badge/Hackathon-2024-blue)](/assets/hackathon-soat.pdf)

## Sumário
1. [Identificação do problema](#identificação-do-problema)
2. [Domain Driven Design](#domain-driven-design)


## Identificação do problema

Os estudos baseiam-se em uma startup de telemedicina, que viabiliza a realização de consultas médicas online. Nosso objetivo é criar um sistema eficiente e seguro para conectar médicos e pacientes. Com este sistema, os pacientes poderão agendar consultas. Além disso, os médicos terão acesso ao prontuário eletrônico dos pacientes, respeitando as permissões concedidas por eles. O sistema também facilitará a gestão das agendas médicas, permitindo que os pacientes vejam os horários disponíveis e agendem consultas de forma prática e conveniente.

## Domain Driven Design

A partir do problema proposto, foi realizada uma análise do domínio do negócio, identificando os principais subdomínios e a linguagem ubíqua. Com base nessa análise, foram elaborados os fluxos de eventos e os domain storytelling, que serviram de base para a criação dos diagramas de modelagem, bem como outros diagramas que auxiliam na compreensão do sistema.

[Documentação DDD](/ddd/README.md)


### Diagramas

#### 1. [Modelo entidade-relacionamento](modelo-entidade-relacionamento.md)

#### 2. [Diagramas de sequência](diagramas-sequencia.md)

#### 3. [Diagrama de status](diagrama-status.md)

#### 4. [Diagrama de fluxo](diagrama-fluxo-endpoints.md)

### LGPD

#### 1. [Relatório de Impacto à Proteção de Dados](RIPD_Grupo_11_SOAT4.md)

### Infraestrutura

#### AWS

- Cognito
- RDS
- S3
- Lambda
- API Gateway
- SQS
- ECR
- EKS
- SNS

#### Infraestrutura

- Terraform
- Helm
- Github Actions
- Docker
- Kubernetes

#### Qualidade de código

- SonarQube

#### Monitoramento

- CloudWatch

#### Documentação

- Swagger

#### Segurança

- OWASP ZAP

### Microsserviços

- Autenticação (Cognito + Postgres)
  - [x] Medico CRM+Senha
  - [x] Paciente Email+CPF+Senha
  - [x] Decodificar JWT
  - [x] Exclusão de usuário
  - [x] Cadastro de usuário
- Consulta (Postgres + Redis(Cache))
  - [x] Cadastro de horários (médico)
  - [x] Exclusão de horários (médico)
  - [x] Listagem de horários disponíveis (médico)
  - [x] Agendamento de consulta
  - [x] Reagendamento de consulta
  - [x] Cancelamento de consulta
  - [x] Histórico de consultas
- Prontuário (Storage + Cassandra)
  - Documentos (Exames, Laudos)
  - Gerenciamento de acesso
- Notificação (SNS)
  - Envio de notificações

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
