const express = require('express');
const app = express();


const path = require('path');
const cors = require('cors');
let state = 1;


 process.env.PORT = process.env.PORT || 3000;
 app.use(cors());
app.use(express.urlencoded({ extended:false }));
app.use(express.json());

app.use(express.static( path.resolve( __dirname, './public' )));

app.post('/setstate/:estado', (req,res) => {
     let newState = req.params.estado;
     state = Number(newState);

     res.header('Content-Type', 'application/json');
     res.json({ok: true});
});

app.get('/state', (req,res) => {
     res.header('Content-Type', 'application/json');
     res.json({ok: true, state, allow: true});
});
app.get('/cancel', (req,res) => {
    state = 0;
    res.header('Content-Type', 'application/json');
     res.json({ok: true, state, allow: false});
});

 app.get('/restart', (req,res) => {
     state = 1;
     res.header('Content-Type', 'application/json');
     res.json({ok: true, mensaje: 'Estado reincioado, estado actual: 1' });
 });
 
 app.listen(process.env.PORT, () => {
     console.log('Escuchando en el puerto: ', process.env.PORT);
 });
