const express = require('express');
const morgan  = require('morgan');

const app = express();

app.use(morgan('dev'));
app.use(express.static('.'))

app.listen(process.env.PORT || 7001);
