
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv').config();
const libroControllers = require('./controllers/libro');
const lectorControllers = require('./controllers/lector');
require('./database/conexion')

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());



/* RUTAS DE LIBROS GET/POST/DELETE */
app.get('/', async (req, res) => {
    res.json({libro: await libroControllers.findAll()}); 
});

app.post('/crearLibro', async (req, res) => {
    console.log(req.body);
        await libroControllers.create(req.body);
    res.json('Libro catálogado.')
});

app.delete('/:id', async (req, res) => {
    console.log(req.params.id);
    const id = req.params.id;
    await libroControllers.delete(id);
    res.json('Libro Eliminado.')
});

/* RUTAS DE Lectores GET/POST/DELETE */
app.get('/lectores', async (req, res) => {
    res.json({
        lector: await lectorControllers.findAll()
    }); 
});

app.post('/crearLector', async (req, res) => {
    console.log(req.body);
        await lectorControllers.create(req.body);
    res.json('Usuario/Lector creado.')
});

app.delete('/:id', async (req, res) => {
    console.log(req.params.id);
    const id = req.params.id;
    await lectorControllers.delete(id);
    res.json('Usuario/Lector Eliminado')
});


app.listen(PORT, ()=>{
    console.log(`Servidor corriendo en el Puerto: ${PORT}`);
})