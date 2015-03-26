const express = require('express')
const morgan = require('morgan')

const app = express()

app.use(morgan('dev'))
app.use(express.static('.'))

app.get('*', function(req, res) {
  res.sendFile('index.html', { root: '.' })
})

app.listen(process.env.PORT || 7001)
