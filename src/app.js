const express = require('express');
const app = express();
const cors = require("cors")
const paginate = require('express-paginate');

const movieApiRoutes = require('./routes/api.v1/movies.routes');
const genreApiRoutes = require('./routes/api.v1/genres.routes');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors())

app.use(paginate.middleware(8,50));
app.use('/api/v1/movies', movieApiRoutes)
app.use('/api/v1/genres', genreApiRoutes)


app.use('*', (req,res) => res.status(404).json({
    ok : false,
    msg : 'Not Found'
}))



//Activando el servidor desde express
app.listen('3001', () => console.log('Servidor corriendo en el puerto 3001'));