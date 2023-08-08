import express from 'express';
import expressEjsLayouts from 'express-ejs-layouts';
import bodyParser from 'body-parser';

import router from './router.js';

const app = express();

app.set('view engine', 'ejs');
app.use(expressEjsLayouts);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// eslint-disable-next-line no-undef
app.use(express.static('/public'));


app.use(router);

export default app;

