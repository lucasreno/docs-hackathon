# Relatório de Impacto à Proteção de Dados Pessoais (RIPD) - Projeto Telemedicina

## Histórico de Revisões
| Data       | Versão | Descrição                            | Autor                      |
|------------|--------|--------------------------------------|----------------------------|
| 20/07/2024 | 1.0    | Conclusão da primeira versão do RIPD | Lucas Proença Renó         |

## Objetivo
Este Relatório de Impacto à Proteção de Dados Pessoais (RIPD) tem como objetivo descrever os processos de tratamento de dados pessoais que podem gerar riscos às liberdades civis e aos direitos fundamentais, bem como as medidas, salvaguardas e mecanismos de mitigação de risco.

Referência: Art. 5º, XVII da Lei 13.709/2018 (LGPD).

## 1. IDENTIFICAÇÃO DOS AGENTES DE TRATAMENTO E DO ENCARREGADO
| Controlador          | Operador                       | Encarregado                            | E-mail Encarregado       | Telefone Encarregado |
|----------------------|--------------------------------|----------------------------------------|--------------------------|----------------------|
| Grupo 11 (SOAT 4)    | Grupo 11 (SOAT 4)              | Vinícius Carloto Carnelocce            | carloto@g11soat4.com     | N/A                  |

### 1.1 Necessidade de Elaborar o Relatório
Este relatório é necessário:
- Sob determinação da ANPD (art. 38).
- Para novas tecnologias, serviços ou iniciativas que tratem dados pessoais sensíveis.
- Quando o tratamento de dados pode resultar em danos patrimoniais, morais, individuais ou coletivos em caso de vazamento (LGPD, art. 42).

## 2. DESCRIÇÃO DO TRATAMENTO

| Tipos de Dados Coletados      | Finalidades                                                                                                  | Base Legal                         | Titulares dos Dados       |
|-------------------------------|--------------------------------------------------------------------------------------------------------------|------------------------------------|---------------------------|
| Nome, e-mail, CPF, CRM, especialidade médica, informações de saúde do paciente (diagnóstico, prescrição médica, laudos, etc.) | Cadastro de médicos para atendimento de pacientes via telemedicina. Cadastro de pacientes para agendamento de consultas. Armazenamento de informações de saúde do paciente. | Consentimento do titular, execução de contrato, cumprimento de obrigação legal, interesse legítimo | Médicos e pacientes |

### 2.1 Natureza do Tratamento
O tratamento dos dados consiste na coleta e no processamento de dados pessoais sensíveis, como e-mail e CPF dos usuários cadastrados na plataforma de telemedicina.

### 2.2 Escopo do Tratamento
O escopo abrange a operação da plataforma de telemedicina, onde são coletados e utilizados dados pessoais sensíveis para identificação e autenticação dos usuários durante suas interações.

### 2.3 Contexto do Tratamento
O tratamento ocorre no contexto da operação da plataforma de telemedicina, cuja atividade principal é a prestação de serviços médicos através de um ambiente digital seguro.

### 2.4 Finalidade do Tratamento
A finalidade é garantir a identificação e autenticação seguras dos usuários durante a utilização da plataforma, assegurando a conformidade com a LGPD e protegendo a privacidade e segurança dos dados.

## 3. PARTES INTERESSADAS CONSULTADAS
Para garantir a conformidade com a LGPD e mitigar riscos relacionados ao tratamento de dados pessoais sensíveis na plataforma de telemedicina, foram consultadas as seguintes partes interessadas:
- Encarregado (LGPD, art. 5º, VIII)
- Especialistas em segurança da informação

Cada parte consultada indicou a importância de implementar controles internos robustos, como políticas de privacidade claras, processos de anonimização de dados quando aplicável e procedimentos de monitoramento contínuo para mitigação de riscos.

## 4. NECESSIDADE E PROPORCIONALIDADE
Para assegurar a conformidade com a LGPD e demonstrar a avaliação criteriosa da necessidade e proporcionalidade dos dados pessoais tratados na plataforma, são adotadas as seguintes medidas:
- Fundamentação Legal: Tratamento baseado no legítimo interesse do controlador (art. 10 da LGPD).
- Qualidade e Minimização dos Dados: Medidas para garantir exatidão, clareza, relevância e atualização dos dados, minimizando o tratamento ao necessário.
- Responsabilidade do Operador: Implementação de controles internos para assegurar conformidade com a LGPD.
- Direito do Titular dos Dados: Medidas para garantir o exercício dos direitos dos titulares, incluindo acesso e exclusão de dados.

## 5. IDENTIFICAÇÃO E AVALIAÇÃO DE RISCOS
Identificamos os seguintes riscos, classificados de acordo com sua probabilidade (P) e seu impacto (I), as graduações variam entre 5, 10 e 15, sendo baixo, médio e alto, respectivamente.

| Id  | Risco                                     | P  | I  | Nível de Risco (P x I) |
|-----|-------------------------------------------|----|----|------------------------|
| R01 | Acesso não autorizado                     | 10 | 15 | 150                    |
| R02 | Operação incorreta dos dados              | 10 | 15 | 150                    |
| R03 | Perda                                     | 5  | 15 | 75                     |
| R04 | Roubo                                     | 5  | 15 | 75                     |
| R05 | Remoção não autorizada                    | 5  | 15 | 75                     |
| R06 | Falha em considerar os direitos do titular| 5  | 15 | 75                     |
| R07 | Compartilhamento sem consentimento        | 10 | 15 | 150                    |
| R08 | Falha/erro de processamento               | 5  | 15 | 75                     |

## 6. MEDIDAS DE SEGURANÇA
Para mitigar os riscos identificados, são adotadas as seguintes medidas de segurança:

| Risco | Medida(s)                                           | Efeito sobre o Risco | Risco Residual |
|-------|-----------------------------------------------------|----------------------|----------------|
| R01   | Implementação de controles de acesso                | Reduzir              | 50             |
| R02   | Implementação de validação de dados, treinamento    | Reduzir              | 50             |
| R03   | Realização de backups regulares, políticas de recuperação | Reduzir        | 25             |
| R04   | Criptografia de dados, medidas físicas e lógicas    | Reduzir              | 25             |
| R05   | Controles de acesso, gestão de privilégios          | Reduzir              | 25             |
| R06   | Implementação de processos para garantir direitos   | Reduzir              | 25             |
| R07   | Consentimento explícito para compartilhamento       | Reduzir              | 50             |
| R08   | Controles de qualidade de dados, validação de entrada | Reduzir            | 25             |

## 7. PROCESSOS E PROCEDIMENTOS
Os processos e procedimentos adotados para garantir a segurança e privacidade dos dados pessoais tratados na plataforma de telemedicina incluem:

| Coleta de Dados                           | Armazenamento de Dados  | Eliminação de Dados                               |
|-------------------------------------------|-------------------------|---------------------------------------------------|
| Através de formulários online e aplicativo preenchidos pelos médicos e pacientes | Em servidores na nuvem   | Após o término do contrato com o médico ou paciente |

## 8. COMPARTILHAMENTO DE DADOS
Os dados pessoais coletados na plataforma de telemedicina são compartilhados apenas com os médicos e pacientes envolvidos nas consultas, respeitando o consentimento do titular dos dados.

| Dados Compartilhados com Terceiros | Medidas de Proteção |
|------------------------------------|---------------------|
| Não                                | N/A                 |

## 9. DIREITOS DOS TITULARES
Os titulares dos dados têm direito a acessar, corrigir, atualizar e excluir seus dados pessoais, bem como a revogar o consentimento para o tratamento dos mesmos.
Exercício dos Direitos dos Titulares: Através do aplicativo ou sistema web


## Aprovação
**Responsável pela Elaboração do Relatório de Impacto**  
Lucas Proença Renó
Matrícula/SIAPE: 00000  
Londrina - PR, 20 de Julho de 2024

**Encarregado**  
Vinícius Carloto Carnelocce  
Matrícula/SIAPE: 00001  
Londrina - PR, 20 de Julho de 2024

**Autoridade Representante do Controlador**  
Matheus Augusto Leme Matiazzo  
Matrícula/SIAPE: 00002  
Londrina - PR, 20 de Julho de 2024

**Autoridade Representante do Operador**  
Alexandre Mikio Kimura Fukano  
Matrícula/SIAPE: 00000  
Londrina - PR, 20 de Julho de 2024