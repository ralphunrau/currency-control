const express = require('express');
const app = express();
const morgan = require('morgan');

app.use(morgan('dev'));

const userRoutes = require('./routes/userRoutes');
app.use('/user', userRoutes);

app.listen(8000, () => {
  console.log('Server hosted on port 8000')
})
