const express = require('express')
const app = express()
const port = 3000

const path = require('path')
app.use('/', express.static(path.join(__dirname, './docs')))

app.use(function (req, res) {
  res.status(404).sendFile(path.join(__dirname, './docs/index.html'))
})

app.listen(port, () =>
  console.log(`Your app is listening to http://localhost:${port}`)
)
