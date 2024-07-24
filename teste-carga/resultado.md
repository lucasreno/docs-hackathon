# Resultado do teste de carga

## Metodologia

O teste de carga foi realizado utilizando a ferramenta [K6](https://k6.io/), que permite a execução de testes de carga e estresse em aplicações web. O teste teve como alvo o microsserviço de consulta em ambiente de produção.

## Proposta

O teste de carga foi realizado com o objetivo de avaliar a capacidade de resposta do microsserviço de consulta em relação a um grande número de requisições. Para isso, foi simulado um cenário em que 20.000 usuários simultâneos realizam requisições ao microsserviço.
Entretanto, devido a limitações de hardware onde o k6 foi executado, foi possível simular apenas 1.000 usuários simultâneos. Além disso, por se tratar de um ambiente de produção, os recursos disponíveis no servidor são mínimos, o que pode impactar nos resultados para uma escala maior.

## Resultados

O teste de carga foi realizado com o incremento de usuários simultâneos a cada 10 segundos, totalizando 1.000 usuários ao final do teste. Ao total 13.624 requisições foram realizadas em 53.4 segundos, com uma taxa de sucesso de 95,06%, ou seja, 673 requisições falhas.

![Resultado do teste de carga](/teste-carga/resultado/vu-req-per-second.png)

As requisições tiveram um tempo médio de resposta de 1.89 segundos, com um tempo máximo de 5.78 segundos. Abaixo é possível visualizar o gráfico de tempos de resposta das requisições.
![Tempos de resposta](/teste-carga/resultado/tempo-resposta.png)

## Escalabilidade

Sobre a infraestrutura, temos o seguinte cenário antes do teste de carga:
- HPA:
![hpa-antes](/teste-carga/resultado/hpa-antes.png)
- Pods:
![pods-antes](/teste-carga/resultado/pods-antes.png)

E após o teste de carga:
- HPA:
![hpa-depois](/teste-carga/resultado/hpa-depois.png)
- Pods:
![pods-depois](/teste-carga/resultado/pods-depois.png)

## Conclusão

A quantidade de VUs (Virtual Users) teve um crescimento linear e relativamente curto, foi possível observar que os pods do microsserviço de consulta não ficaram prontos para atender as requisições, o que pode explicar as falhas nas requisições. Além disso, a infraestrutura foi dimensionada pensando nos custos, o que impactou diretamente na capacidade de resposta do microsserviço.

## Documentação adicional

- [Passo a passo para execução do teste de carga](/teste-carga/README.md)
- [Script de teste - Sobrecarga](/teste-carga/scripts/get.js)
- [Script de teste - Simulação usuários](/teste-carga/scripts/user.js)
- [Resultados completos](/teste-carga/resultado/screencapture-localhost-3000-d-58AyB-XSk-k6-load-testing-results-2024-07-23-20_04_13.png)
- [Dashboard Grafana (json)](/teste-carga/resultado/k6%20Load%20Testing%20Results-1721775826139.json)
- [Logs do teste](/teste-carga/resultado/output-console.log)
