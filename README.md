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
  5. Paciente aceita/cancela reagendamento
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

![Paciente agenda consulta_2024-07-16](/domain-storytelling/Paciente%20agenda%20consulta_2024-07-22.egn.svg)

#### Médico acessa prontuário

![Médico acessa prontuário_2024-07-16](/domain-storytelling/Médico%20acessa%20prontuário_2024-07-22.egn.svg)

#### Médico gerencia agenda

![Médico gerencia agenda_2024-07-16](/domain-storytelling/Médico%20gerencia%20agenda_2024-07-22.egn.svg)

#### Paciente visualiza histórico de consultas

![Paciente visualiza histórico de consultas_2024-07-16](/domain-storytelling/Paciente%20visualiza%20histórico%20de%20consultas_2024-07-22.egn.svg)

#### Paciente autoriza acesso a prontuário

![Paciente autoriza acesso a prontuário_2024-07-17](/domain-storytelling/Paciente%20autoriza%20acesso%20a%20prontuário_2024-07-22.egn.svg)

#### Reagendamento de consulta pelo paciente

![Reagendamento de consulta pelo paciente_2024-07-17](/domain-storytelling/Reagendamento%20de%20consulta%20pelo%20paciente_2024-07-22.egn.svg)

#### Reagendamento de consulta pelo médico

![Reagendamento de consulta pelo médico_2024-07-17](/domain-storytelling/Reagendamento%20de%20consulta%20pelo%20médico_2024-07-22.egn.svg)

#### Cancelamento de consulta pelo paciente

![Cancelamento de consulta pelo paciente](/domain-storytelling/Cancelamento%20de%20consulta%20pelo%20paciente_2024-07-22.egn.svg)

#### Cancelamento de consulta pelo médico

![Cancelamento de consulta pelo médico_2024-07-17](/domain-storytelling/Cancelamento%20de%20consulta%20pelo%20médico_2024-07-22.egn.svg)

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
