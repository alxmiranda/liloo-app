const express = require('express');

const app = express();
const port = process.env.PORT || 9002;

app.listen(port, () => {
  console.log(`server rodando na porta ${port}`);
});

app.use(express.static('dist'))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/dist/index.html')
})