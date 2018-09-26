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

app.post('/change/:estado', (req,res) => {
     let newState = req.params.estado;
     state = Number(newState);

     res.send(`Estado cambiado ${newState}`)
});

app.get('/state', (req,res) => {
     console.log('entro');
     res.header('Content-Type', 'application/json');
     res.json({ok: true, state});
     console.log('salio xd');
});

 app.get('/restart', (req,res) => {
     state = 1;
     res.header('Content-Type', 'application/json')
     res.json({ mensaje: 'Estado reincioado, estado actual: 1' });
 });

 
 app.listen(process.env.PORT, () => {
     console.log('Escuchando en el puerto: ', process.env.PORT);
 });
