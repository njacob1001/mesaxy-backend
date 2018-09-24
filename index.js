const express = require('express');
const app = express();
const path = require('path');
 process.env.PORT = process.env.PORT || 3000;

 app.use(express.urlencoded({ extended:false }));
 app.use(express.json());

 let state = 1;

 app.put('/state/:estado', (req,res) => {
     let newState = req.params.estado;
     state = Number(newState);

     res.send(`Estado cambiado ${newState}`)
 });

 app.get('/state', (req,res) => {
     res.send({state});
 });

 app.get('/restart', (req,res) => {
     state = 1;
     res.send('Estado reincioado, estado actual: 1');
 });

 
 app.listen(process.env.PORT, () => {
     console.log('Escuchando en el puerto: ', process.env.PORT);
 });
