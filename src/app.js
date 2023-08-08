import express from 'express';
import router from './router.js';

const app = express();

//cinfiguração para rodar meus arquivos ejs
app.set("view engine", "ejs");

//carregando arquivos estáticos, exemplo: css
console.log('[ Loading files statics... ]')
app.use(express.static('public'))

//Importação das minhas Rotas
console.log('[ Loading routers... ]')
app.use(router)

export default app

