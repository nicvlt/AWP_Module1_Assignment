const express = require('express')
const app = express()
const Service = require("./service.js");
const port = 3000

app.use(express.static('public'))
app.use(express.json());
app.get('/', (_, res) => {
  res.sendFile(path.join(__dirname + "/index.html"));
})

app.get("/cats", Service.getCats);
app.get("/cats/:name_cat", Service.getCatByName);
app.post("/cats", Service.createCat);
app.put("/cats", Service.updateCat);
app.delete("/cats/:name_cat", Service.deleteCat);


app.get('/api/ping', (req, res) => {
  res.send({ message : ' A CAT ?!?!?!'.repeat(req.query.value), value : req.query.value});
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})