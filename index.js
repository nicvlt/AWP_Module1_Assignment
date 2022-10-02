const express = require('express')
const app = express()
const port = 3000

//change path to any filepath
app.get('/', (req, res) => {
  res.sendFile('C:\\Users\\nicol\\Desktop\\Cours\\UCI\\Advanced Web Programming\\Week1\\AWP_Module1_Assignment\\img\\cat-bath.jpg')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})