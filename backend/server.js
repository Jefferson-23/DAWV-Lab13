const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const itemController = require('./controllers/itemController');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Conexion exitosa a MongoDb');
    })
    .catch((error) => {
        console.log('Error en la conexion a MongoDb', error);
    });

app.get('/api/items', itemController.getItems);
app.get('/api/items/:id', itemController.getItemById);
app.post('/api/items', itemController.createItem);
app.put('/api/items/:id', itemController.updateItem);
app.delete('/api/items/:id', itemController.deleteItem);

app.listen(port, () => {
    console.log(`Servidor backend funcionando en el puerto:` , port);
});