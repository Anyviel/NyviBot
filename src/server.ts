import express from 'express';

const app = express()

app.get('/', (req, res) => {
  return res.send('Olá, eu sou o NyviBot!')
});

app.post('/users', (req, res) => {
  return res.json({ message: 'Usuário cadastrado com sucesso!' })
});

app.listen(3333, () => {
  console.log('Server is Running on port 3333')
})