const express = require(`express`)
const app = express()
const resolve = require(`path`).resolve

const templates = require(`./controllers/templates`)

app.get(`/`, (req, res) => {
  
  res.send(``)
})

app.use(`/api/templates`, templates)

app.use(`/statics`, express.static(resolve(__dirname, `public`)))

app.listen(9081, () => {
  console.info(`Mock server is running`)
})