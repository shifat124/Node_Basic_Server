const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')
const bodyParser = require('body-parser')
app.use(cors())
app.use(bodyParser.json())
const vegetables=[
  {},
  {
    id: 1,
    name: 'begun',
    color: 'green',
    price: '200',
  },
  {
    id: 2,
    name: 'begun',
    color: 'green',
    price: '200',
  },
  {
    id: 3,
    name: 'begun',
    color: 'green',
    price: '200',
  },
  {
    id: 4,
    name: 'begun',
    color: 'green',
    price: '200',
  },

]

app.get('/', (req, res) => {
  
  res.send("Welcome to my Vegetable Shop!!")
})

app.get('/vegetables', (req, res) => {
  
  res.send(vegetables)
})

app.get('/vegetables/:id', (req, res) => {
  const id=req.params.id;
  const veg=vegetables[id];
res.send(veg);
})

//Post
app.post('/addVegetables', (req, res) => {
  
  console.log("Data Received!!",  req.body)
    //  Saving to Database
    const vegetable = req.body;
    vegetable.id = 80;
    console.log(vegetable)
    res.send(vegetable);
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})