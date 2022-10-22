const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 3000
const db = require('./queries')

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.use(express.static('public'))

app.get('/', (_, res) => {
  res.sendFile(path.join(__dirname + "/index.html"));
})

app.get('/cats', db.getCats)
app.get('/cats/:id', db.getCatsById)
app.post('/cats', db.createCats)
app.put('/cats/:id', db.updateCats)
app.delete('/cats/:id', db.deleteCats)

app.get('/api/ping', (req, res) => {
  res.send({ message : ' A CAT ?!?!?!'.repeat(req.query.value), value : req.query.value});
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})