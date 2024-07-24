# Teste de carga

## Objetivo

Testar a capacidade de resposta do servidor em relação a um grande número de requisições.

## Ferramentas

- [K6](https://k6.io/)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)
- [InfluxDB](https://www.influxdata.com/)
- [Grafana](https://grafana.com/)

## Execução

1. Subir o ambiente de teste:

```bash
docker-compose up -d
```

2. Executar o teste de carga:

```bash
docker-compose run k6 run /scripts/get.js
```

3. Acessar o Grafana:

- Acessar o endereço `http://localhost:3000`
- Usuário: `admin`
- Senha: `admin`

4. Adicionar o datasource InfluxDB:

- Acessar o menu `Configuration` -> `Data Sources`
- Clicar em `Add data source`
- Selecionar o tipo `InfluxDB`
- Informar o endereço `http://influxdb:8086`
- Informar o nome do banco de dados `k6`
- Clicar em `Save & Test`

5. Adicionar o dashboard:

- Acessar o menu `Dashboards` -> `Import`
- Informar o ID [`2587`](https://grafana.com/grafana/dashboards/2587-k6-load-testing-results/)
- Clicar em `Load`
- Selecionar o datasource `InfluxDB`
- Clicar em `Import`