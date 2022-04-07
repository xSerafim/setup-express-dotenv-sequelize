require('dotenv').config();

const express = require('express');
const { getAllUsers, error } = require('./controllers');

const app = express();

app.use(express.json());

app.get('/', (_request, res) => {
  return res.status(200).send('hello world!!');
});

app.get('/users', getAllUsers);

app.use(error);

app.listen(process.env.PORT, () => {
  console.log(`Escutando na porta ${process.env.PORT}`);
});
