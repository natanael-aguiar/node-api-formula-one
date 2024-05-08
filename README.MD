# Formula 1 API

Esta é uma API simples para obter informações sobre equipes e pilotos da Fórmula 1.

## Pré-requisitos

- Node.js instalado
- npm ou yarn instalado

## Instalação

1. Clone este repositório:

```shell
   https://github.com/natanael-aguiar/node-api-formula-one.git   
```

2. Navegue até o diretório do projeto:

```shell
   cd node-api-formula-one.git
```

3. Instale as dependências:

```javascript
   npm install
   # ou
   yarn install
```

## Uso

1. **Inicie o servidor:**

   ```javascript
   npm start:dev
   # ou
   npm start:watch
   ```

2. **Acesse os endpoints através de um cliente HTTP como o Postman ou um navegador web.**

## Endpoints

- **GET /teams**

  Retorna informações sobre todas as equipes da Fórmula 1.

- **GET /drivers**

  Retorna informações sobre todos os pilotos da Fórmula 1.

- **GET /drivers/:id**

  Retorna informações sobre um piloto específico com o ID fornecido.

## Tecnologias utilizadas

- Node.js
- TypeScript
- Fastify