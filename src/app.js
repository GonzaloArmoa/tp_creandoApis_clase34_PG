const express = require('express');
const app = express();
const paginate = require('express-paginate');

const movieApiRoutes = require('./routes/api.v1/movies.routes');

app.use(express.urlencoded({ extended: false }));

app.use(paginate.middleware(8,50));
app.use('/api/v1/movies', movieApiRoutes)


//Activando el servidor desde express
app.listen('3001', () => console.log('Servidor corriendo en el puerto 3001'));
