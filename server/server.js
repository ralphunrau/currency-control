const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const cookieSession = require('cookie-session');
const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cookieSession({
  name: 'session',
  keys: ['key1', 'key2'],
  maxAge: 12 * 60 * 60 * 1000 // 12 Hour Cookie
}))

const userRoutes = require('./routes/userRoutes');
app.use('/user', userRoutes);

app.listen(8000, () => {
  console.log('Server hosted on port 8000')
})
