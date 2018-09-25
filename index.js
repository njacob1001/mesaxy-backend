const express = require('express');
const app = express();
const path = require('path');
// const cors = require('cors');


 process.env.PORT = process.env.PORT || 3000;
// app.use(cors());
app.use(express.urlencoded({ extended:false }));
app.use(express.json());

let state = 1;

app.use(express.static( path.resolve( __dirname, './public' )));

 app.post('/state/:estado', (req,res) => {
     let newState = req.params.estado;
     state = Number(newState);

     res.send(`Estado cambiado ${newState}`)
 });

 app.get('/state', (req,res) => {
     res.set('Content-Type', 'application/json');
     res.write(JSON.stringify({state:state}));
 });

 app.get('/restart', (req,res) => {
     state = 1;
     res.set('Content-Type', 'application/json')
     res.write(JSON.stringify({mensaje: 'Estado reincioado, estado actual: 1'}));
 });

 
 app.listen(process.env.PORT, () => {
     console.log('Escuchando en el puerto: ', process.env.PORT);
 });
