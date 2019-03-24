let express = require('express'),
  bodyParser = require('body-parser'),
  routes = require('./routes/routes.js');

let session = require('express-session'),
  cookieParser = require('cookie-parser'),
  flash = require('connect-flash');
let logger= require('./logger.js');

let app = express();
let port = 4000;


app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// set sessions and cookie parser
app.use(cookieParser());
app.use(session({
  secret: 'test',
  cookie: { maxAge: 60000 },
  resave: false,    // forces the session to be saved back to the store
  saveUninitialized: false  // dont save unmodified
}));
app.use(flash());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const appRoutes = routes(app);
app.listen(port, function () {
  console.log('Server is running at port: ', port);
  logger.info('App Listening');
});