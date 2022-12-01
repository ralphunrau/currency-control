const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const morgan = require('morgan');
const cors = require('cors');
const app = express();

app.use(morgan('dev'));
app.use(cors({
  origin: ["http://localhost:3002"],
  methods: ['GET', 'POST'],
  credentials: true
}));

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(session({
  key: 'userId',
  secret: 'topSecret',
  resave: false,
  saveUninitialized: false,
  cookie: {
    expires: 60 * 60 * 24,
  }
}));

const userRoutes = require('./routes/userRoutes');
app.use('/user', userRoutes);

app.listen(8000, () => {
  console.log('Server hosted on port 8000')
})
