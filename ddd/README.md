# Arquitetura Baseada em Domain-Driven Design (DDD)

Este documento demonstra o processo de Domain-Driven Design (DDD) aplicado ao projeto de software do Hackathon 2024 da FIAP. O DDD é uma abordagem de design de software que enfatiza a colaboração entre especialistas no domínio e desenvolvedores para criar um modelo de domínio robusto e relevante. Durante as duas semanas de desenvolvimento do projeto, realizamos reuniões contínuas com especialistas no domínio (tutores) para compreender profundamente o negócio e criar um design de software que reflita esse domínio.

## Sumário
1. [Identificação dos Domínios](#identificação-dos-domínios)
    - [Subdomínios Principais](#subdomínios-principais)
    - [Subdomínios de Suporte](#subdomínios-de-suporte)
    - [Subdomínios Genéricos](#subdomínios-genéricos)
2. [Linguagem Ubíqua](#linguagem-ubíqua)
3. [Contextos Delimitados (Bounded Contexts)](#contextos-delimitados-bounded-contexts)
    - [Contexto de Autenticação](#contexto-de-autenticação)
    - [Contexto de Agendamento](#contexto-de-agendamento)
    - [Contexto de Prontuário Eletrônico](#contexto-de-prontuário-eletrônico)
    - [Contexto de Notificação](#contexto-de-notificação)
4. [Domain Storytelling](#domain-storytelling)
5. [Event Storming](#event-storming)
    - [Paciente agenda consulta](#a-paciente-agenda-consulta)
    - [Médico acessa prontuário](#b-médico-acessa-prontuário)
    - [Médico gerencia agenda](#c-médico-gerencia-agenda)
    - [Paciente visualiza histórico de consultas](#d-paciente-visualiza-histórico-de-consultas)
    - [Paciente autoriza acesso a prontuário](#e-paciente-autoriza-acesso-a-prontuário)
    - [Reagendamento de consulta pelo paciente](#f-reagendamento-de-consulta-pelo-paciente)
    - [Reagendamento de consulta pelo médico](#g-reagendamento-de-consulta-pelo-médico)
    - [Cancelamento de consulta pelo paciente](#h-cancelamento-de-consulta-pelo-paciente)
    - [Cancelamento de consulta pelo médico](#i-cancelamento-de-consulta-pelo-médico)
6. [Conclusão](#conclusão)


## Identificação dos domínios

Procuramos identificar domínios do negócio, a fim de compreender melhor o problema e criar um design de software que reflita esse domínio. Nesse caso, abordamos em três categorias: domínios principais, domínios de suporte e domínios genéricos.

- ### Subdomínios principais

São áreas críticas e estratégicas do negócio, onde a empresa cria seu maior diferencial competitivo

    - Paciente
    - Médico
    - Consulta
    - Prontuário

- ### Subdomínios de suporte

Auxiliam os domínios principais, mas não são o foco principal do negócio

    - Agenda
    - Aceite de consulta

- ### Subdomínios genéricos

São áreas comuns a muitos sistemas, que não são específicas do negócio em questão

    - Autenticação
    - Notificação
    - Storage

## Linguagem Ubíqua

    Saúde: área de atuação relacionada ao bem-estar físico e mental
    Telemedicina: prática de medicina à distância
    Paciente: pessoa que busca atendimento médico
    Médico: profissional de saúde que atende pacientes
    Especialidade: área de atuação do médico
    Consulta: encontro entre médico e paciente
    Prontuário: registro médico do paciente, incluindo histórico de consultas e exames
    Exame: procedimento médico para diagnóstico
    Laudo: resultado de exame expedido por médico
    Agenda: horários disponíveis para consultas
    Aceite de consulta: confirmação de consulta por parte do médico
    Autenticação: processo de validação de identidade
    Notificação: mensagem enviada para informar sobre eventos
    Storage: armazenamento de dados

## Contextos Delimitados (Bounded Contexts)

Os contextos delimitados são limites lógicos que separam diferentes partes do domínio, permitindo que cada parte seja tratada de forma independente. Cada contexto delimitado possui seu próprio modelo de domínio, linguagem ubíqua e regras de negócio.


### Contexto de autenticação
- **Responsabilidade**: Gerenciar a autenticação e autorização de usuários no sistema (médicos e pacientes).
- **Fronteiras**: Este contexto inclui todas as funcionalidades relacionadas ao login e controle de acesso, bem como a gestão de sessões dos usuários.
- **Interações**: Interage com o Contexto de Agendamento e o Contexto de Prontuário Eletrônico para garantir que apenas usuários autenticados possam acessar essas funcionalidades.

### Contexto de Agendamento
- **Responsabilidade**: Gerenciar o agendamento, edição e cancelamento de consultas médicas.
- **Fronteiras**: Inclui funcionalidades para médicos (cadastro/edição de horários, aceitação/recusa de consultas) e para pacientes (busca de médicos, visualização de agenda, agendamento e cancelamento de consultas).
- **Interações**: Interage com o Contexto de Autenticação para validar o acesso do usuário.

### Contexto de Prontuário Eletrônico
- **Responsabilidade**: Gerenciar o prontuário eletrônico dos pacientes, incluindo o armazenamento e compartilhamento de documentos médicos.
- **Fronteiras**: Inclui funcionalidades de upload de documentos, gestão de compartilhamento e acesso a registros médicos.
- **Interações**: Interage com o Contexto de Autenticação para garantir que apenas usuários autorizados acessem os prontuários.

### Contexto de Notificação
- **Responsabilidade**: Gerenciar o envio de notificações para médicos e pacientes sobre eventos relevantes no sistema.
- **Fronteiras**: Inclui funcionalidades para envio de mensagens de confirmação de agendamento, lembretes de consulta, notificações de compartilhamento de prontuário, etc.
- **Interações**: Interage com os outros contextos para enviar notificações em momentos específicos.

## Domain Storytelling

A técnica de Domain Storytelling é uma forma de contar histórias sobre o domínio do negócio, ajudando a entender as interações entre os diferentes atores e processos envolvidos. Durante o desenvolvimento do projeto, utilizamos essa técnica para criar diagramas que representam as principais interações entre pacientes, médicos e o sistema de agendamento de consultas.

![Paciente agenda consulta](/ddd/domain-storytelling/Paciente%20agenda%20consulta_2024-07-22.egn.svg)
![Médico acessa prontuário](/ddd/domain-storytelling/Médico%20acessa%20prontuário_2024-07-22.egn.svg)
![Médico gerencia agenda](/ddd/domain-storytelling/Médico%20gerencia%20agenda_2024-07-22.egn.svg)
![Paciente visualiza histórico de consultas](/ddd/domain-storytelling/Paciente%20visualiza%20histórico%20de%20consultas_2024-07-22.egn.svg)
![Paciente autoriza acesso a prontuário](/ddd/domain-storytelling/Paciente%20autoriza%20acesso%20a%20prontuário_2024-07-22.egn.svg)
![Reagendamento de consulta pelo paciente](/ddd/domain-storytelling/Reagendamento%20de%20consulta%20pelo%20paciente_2024-07-22.egn.svg)
![Reagendamento de consulta pelo médico](/ddd/domain-storytelling/Reagendamento%20de%20consulta%20pelo%20médico_2024-07-22.egn.svg)
![Cancelamento de consulta pelo paciente](/ddd/domain-storytelling/Cancelamento%20de%20consulta%20pelo%20paciente_2024-07-22.egn.svg)
![Cancelamento de consulta pelo médico](/ddd/domain-storytelling/Cancelamento%20de%20consulta%20pelo%20médico_2024-07-22.egn.svg)

### Event Storming

O Event Storming é uma técnica de modelagem colaborativa que permite visualizar os eventos e processos de um sistema de forma rápida e eficaz. Durante o desenvolvimento do projeto, realizamos sessões de Event Storming para mapear os eventos e fluxos de cada contexto delimitado, identificando as interações entre eles e refinando o design do sistema. Ao invés da técnica tradicional utilizando post-its ou miro, utilizamos o próprio repositório do GitHub para documentar os eventos.

#### a. Paciente agenda consulta
  1. Paciente acessa o sistema
  2. Paciente seleciona especialidade
  3. Paciente seleciona médico
  4. Paciente seleciona horário
  5. Paciente confirma agendamento
  6. Sistema envia notificação para médico
  7. Médico aceita/recusa consulta
  8. Sistema envia notificação para paciente
#### b. Médico acessa prontuário
  1. Médico acessa o sistema
  2. Médico seleciona paciente
  3. Médico visualiza prontuário que paciente autorizou
#### c. Médico gerencia agenda
  1. Médico acessa o sistema
  2. Médico visualiza agenda
  3. Médico cadastra/altera horários disponíveis
#### d. Paciente visualiza histórico de consultas
  1. Paciente acessa o sistema
  2. Paciente visualiza histórico de consultas
#### e. Paciente autoriza acesso a prontuário
  1. Paciente acessa o sistema
  2. Paciente escolhe os documentos que deseja compartilhar
  3. Paciente escolhe médico
  4. Paciente autoriza acesso
  5. Sistema envia notificação para médico
  6. Médico acessa prontuário
#### f. Reagendamento de consulta pelo paciente
  1. Paciente acessa o sistema
  2. Paciente visualiza consultas agendadas
  3. Paciente solicita reagendamento
  4. Sistema envia notificação para médico
  5. Médico aceita/recusa reagendamento
  6. Sistema envia notificação para paciente
#### g. Reagendamento de consulta pelo médico
  1. Médico acessa o sistema
  2. Médico visualiza consultas agendadas
  3. Médico solicita reagendamento
  4. Sistema envia notificação para paciente
  5. Paciente aceita/cancela reagendamento
  6. Sistema envia notificação para médico
#### h. Cancelamento de consulta pelo paciente
  1. Paciente acessa o sistema
  2. Paciente visualiza consultas agendadas
  3. Paciente solicita cancelamento
  4. Verificação se é possível cancelar a consulta
     - Regra: consulta pode ser cancelada até 24h antes do horário marcado
  5. Sistema envia notificação para médico
#### i. Cancelamento de consulta pelo médico
  1. Médico acessa o sistema
  2. Médico visualiza consultas agendadas
  3. Médico solicita cancelamento
  4. Verificação se é possível cancelar a consulta
     - Regra: consulta pode ser cancelada até 24h antes do horário marcado
  5. Sistema envia notificação de cancelamento para paciente
  6. Sistema sugere reagendamento

## Conclusão

O Domain-Driven Design (DDD) é uma abordagem poderosa para criar software que reflita o domínio do negócio e atenda às necessidades dos usuários. Durante o desenvolvimento do projeto, aplicamos os princípios do DDD para identificar os domínios principais, criar uma linguagem ubíqua compartilhada, delimitar contextos, contar histórias de domínio e mapear eventos com Event Storming. Essas técnicas nos ajudaram a compreender melhor o problema, colaborar com os especialistas no domínio e criar um design de software robusto e relevante para o Hackathon 2024 da FIAP.