const express = require('express');
const app = express();


const path = require('path');
const cors = require('cors');
let state = 1;
let allow = true;

//Definiendo el puerto
process.env.PORT = process.env.PORT || 3000;


app.use(cors()); //permite ser consultado desde cualquier pagina
app.use(express.urlencoded({ extended:false })); //bodyparser
app.use(express.json()); //permite leer json
app.use(express.static( path.resolve( __dirname, './public' ))); //muestra el index html

app.get('/state', (req,res) => {
    res.header('Content-Type', 'application/json');
    res.json({ok: true, state, allow});
});

app.post('/setstate/:estado', (req,res) => {
     let newState = req.params.estado;
     state = Number(newState);

     res.header('Content-Type', 'application/json');
     res.json({ok: true});
});

app.get('/stop', (req,res) => {
    allow = false;
    res.header('Content-Type', 'application/json');
     res.json({ok: true, state, allow});
});

 app.get('/cancel', (req,res) => {
     state = 1;
     allow = true;
     res.header('Content-Type', 'application/json');
     res.json({ok: true, mensaje: 'Estado reincioado, estado actual: 1' });
 });
 
 app.listen(process.env.PORT, () => {
     console.log('Escuchando en el puerto: ', process.env.PORT);
 });
