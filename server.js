const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

//variável
let carro = {};

// constante, array com objetos
const tarefas = [
  {
    id:"1",
    texto:"Tirar o lixo",
    completo: false
  },
  {
    id:"2",
    texto:"Varrer a chão",
    completo: true
  },
  {
    id:"3",
    texto:"Lavar o carro",
    completo: false
  }
];

//Objeto
carro = {
  marca:"Toyata",
  modelo:"Civic",
  ano: 2025,
  cor : ["Azul","Rosa","Verde"],
  acessorios:{
    aro:14,
    airbags:"Tecido Veludo",
    sensoreDeChuva: true,
    sensoresDeTerromoto: false,
  }
}

console.log(tarefas[1].texto.ma);