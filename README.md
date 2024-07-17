# FIAP - Hackathon 2024 - SOAT4 - Grupo 11
## Health&Med👨‍⚕️

### Requisitos
- Autenticação de usuário (paciente e médico)
- Gerenciamento de agenda
- Aceite de consulta
- Agenda de consultas

### Identificação do problema
Os estudos tem base em uma inovadora startup de telemedicina, que torna possível realizar consultas médicas online. Nosso objetivo é criar um sistema eficiente e seguro para conectar médicos e pacientes. Com este sistema, os pacientes poderão facilmente agendar consultas com médicos. Além disso, os médicos terão acesso ao prontuário eletrônico dos pacientes, mas apenas às informações que o paciente permitir. O sistema também facilitará para os médicos a gestão de suas agendas, permitindo aos pacientes ver os horários disponíveis e marcar consultas de forma prática.

### Identificação dos domínios do negócio
#### Subdomínios principais
- Paciente
- Médico
- Consulta
- Prontuário

#### Subdomínios de suporte
- Agenda
- Aceite de consulta

#### Subdomínios genéricos
- Autenticação
- Notificação
- Storage

### Linguagem Ubíqua
- Saúde: área de atuação do sistema
- Telemedicina: prática de medicina à distância
- Paciente: pessoa que busca atendimento médico
- Médico: profissional de saúde que atende pacientes
- Especialidade: área de atuação do médico
- Consulta: encontro entre médico e paciente
- Prontuário: registro médico do paciente, incluindo histórico de consultas e exames
- Exame: procedimento médico para diagnóstico
- Laudo: resultado de exame expedido por médico
- Agenda: horários disponíveis para consultas
- Aceite de consulta: confirmação de consulta por parte do médico
- Autenticação: processo de validação de identidade
- Notificação: mensagem enviada para informar sobre eventos
- Storage: armazenamento de dados

### Fluxos de eventos
- a. Paciente agenda consulta
    1. Paciente acessa o sistema
    2. Paciente seleciona especialidade
    3. Paciente seleciona médico
    4. Paciente seleciona horário
    5. Paciente confirma agendamento
    6. Sistema envia notificação para médico
    7. Médico aceita/recusa consulta
    8. Sistema envia notificação para paciente
- b. Médico acessa prontuário
    1. Médico acessa o sistema
    2. Médico seleciona paciente
    3. Médico visualiza prontuário que paciente autorizou
- c. Médico gerencia agenda
    1. Médico acessa o sistema
    2. Médico visualiza agenda
    3. Médico cadastra/altera horários disponíveis
- d. Paciente visualiza histórico de consultas
    1. Paciente acessa o sistema
    2. Paciente visualiza histórico de consultas
- e. Paciente autoriza acesso a prontuário
    1. Paciente acessa o sistema
    2. Paciente escolhe os documentos que deseja compartilhar
    3. Paciente escolhe médico
    4. Paciente autoriza acesso
    5. Sistema envia notificação para médico
    6. Médico acessa prontuário
- f. Reagendamento de consulta pelo paciente
    1. Paciente acessa o sistema
    2. Paciente visualiza consultas agendadas
    3. Paciente solicita reagendamento
    4. Sistema envia notificação para médico
    5. Médico aceita/recusa reagendamento
    6. Sistema envia notificação para paciente
- g. Reagendamento de consulta pelo médico
    1. Médico acessa o sistema
    2. Médico visualiza consultas agendadas
    3. Médico solicita reagendamento
    4. Sistema envia notificação para paciente
    5. Paciente aceita/recusa reagendamento
    6. Sistema envia notificação para médico 
- h. Cancelamento de consulta pelo paciente
    1. Paciente acessa o sistema
    2. Paciente visualiza consultas agendadas
    3. Paciente solicita cancelamento
    4. Verificação se é possível cancelar a consulta
        - Regra: consulta pode ser cancelada até 24h antes do horário marcado
    5. Sistema envia notificação para médico
- i. Cancelamento de consulta pelo médico
    1. Médico acessa o sistema
    2. Médico visualiza consultas agendadas
    3. Médico solicita cancelamento
    4. Verificação se é possível cancelar a consulta
        - Regra: consulta pode ser cancelada até 24h antes do horário marcado
    5. Sistema envia notificação de cancelamento para paciente
    6. Sistema sugere reagendamento


### Domain Storytelling
#### Paciente agenda consulta
![Paciente agenda consulta_2024-07-16](https://github.com/user-attachments/assets/7400a26d-d042-4ad9-a06f-018b0fbc29ef)

### Diagramas
#### 1. [Modelo entidade-relacionamento](https://github.com/lucasreno/docs-hackathon/blob/master/modelo-entidade-relacionamento.md)

#### 2. [Diagramas de sequência](https://github.com/lucasreno/docs-hackathon/blob/master/diagramas-sequencia.md)

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
    - Cadastro/Alteração de horários (médico)
    - Listagem de horários disponíveis (médico)
    - Agendamento de consulta
    - Reagendamento de consulta
    - Cancelamento de consulta
    - Histórico de consultas
- Prontuário (Storage + Cassandra)
    - Documentos (Exames, Laudos)
    - Gerenciamento de acesso
- Notificação (SNS)
    - Envio de notificações

### Todo
- [ ] Criar infraestrutura
    - [ ] Adicionar Github Actions
- [x] Criar microsserviços autenticação (Math)
    - [x] Adaptar cliente -> médico e paciente
- [ ] Criar microsserviços consulta (Math + Ale)
    - [ ] Modelar banco de dados
    - [ ] Implementar CRUD de horários
    - [ ] Implementar agendamento de consulta
    - [ ] Implementar listagem de horários disponíveis
    - [ ] Implementar listagem de consultas agendadas
    - [ ] Implementar aceite/recusa de consulta
    - [ ] Testes de estresse (sistema deve suportar 20.000 usuários simultâneos)
- [ ] Diagramas
    - [x] Diagrama da infraestrutura (Lucas)
    - [x] Modelagem Entidade-Relacionamento (Lucas)
    - [ ] Storytelling (egon.io) (Carloto)
    - [x] Diagrama de sequência (Lucas)
    - [ ] Diagrama de status (Status consultas)
    - [ ] Diagrama de fluxo com Endpoints
    - [ ] Diagrama Clean Architecture ![Diagrama](https://private-user-images.githubusercontent.com/62509668/332299867-3b959abe-924c-424a-84b5-ab0b1dc11730.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjEwODk5MjUsIm5iZiI6MTcyMTA4OTYyNSwicGF0aCI6Ii82MjUwOTY2OC8zMzIyOTk4NjctM2I5NTlhYmUtOTI0Yy00MjRhLTg0YjUtYWIwYjFkYzExNzMwLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA3MTYlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwNzE2VDAwMjcwNVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTkyYjlmMDdlZjNjMGMwNjYyZmRiNzBmMzM1ZDVhMzNiNTBiY2Y1MmRiOWIxYjRhNjE5OWQwMmNhZDU5ZjhiZWUmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.sYbsPfZQ45PVCnXDCGkjdxKJs4mRZTe9nL0ds_Xm_bc)
- [ ] LGPD
    - [ ] Documentar sobre LGPD
    - [ ] Dados sensíveis (Saúde)
- [ ] Documentação
    - [ ] Registro corbertura de testes
    - [ ] Relatório SonarQube
    - [ ] Relatório OWASP ZAP
    - [ ] Saga coreografada
- [ ] Fechar todas as branches

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
