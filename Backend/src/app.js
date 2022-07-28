const express = require('express');
const cors = require('cors');
const app = express();

//settings
app.set('port',process.env.PORT || 4000);

//middlewares
app.use(cors());
app.use(express.json());

//routes
app.use('/api/autobus', require('./routes/autobus'))
app.use('/api/chofer', require('./routes/chofer'))
app.use('/api/servicio', require('./routes/servicio'))
app.use('/api/viaje', require('./routes/viaje'))
app.use('/api/user', require('./routes/user'))


module.exports = app;
