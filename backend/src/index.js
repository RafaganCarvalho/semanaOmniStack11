/**
 * Rota /Recursos
 * 
 * Métodos HTTP:
 * GET: Buscar uma insformação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Remover uma informação no back-end
 */

/**
 * Tipos de paramêtros:
 * Query: Parâmetros nomeados e enviados na rota a´pos "?" (Filtros, paginação)
 * Route Params: Parâmetros utilizados para identificar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 */

 /**
  * SQL: MySQL, SQLlite, PostgreSQL, Oracle, Microsoft SQL Server
  * NoSQL: MongoDB, CouchDB, etc...
  */

  /**
   * Driver: SELECT * FROM users
   * Query Builder: table('users').select
   */

const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);

app.listen(3333);