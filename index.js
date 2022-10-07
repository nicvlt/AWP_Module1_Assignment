const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/', (_, res) => {
  res.sendFile(path.join(__dirname + "/index.html"));
})

app.get('/api/ping', (req, res) => {
  res.send({ message : ' A CAT ?!?!?!'.repeat(req.query.value), value : req.query.value});
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})