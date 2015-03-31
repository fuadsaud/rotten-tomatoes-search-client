const express = require('express')
const morgan = require('morgan')

const port = process.env.PORT || 7001

const app = express()


app.use(morgan('dev'))
app.use(express.static('.'))

app.get('*', function(req, res) {
  res.sendFile('index.html', { root: '.' })
})

console.log('Starting up HTTP server on listening on port ' + port)

app.listen(port)
