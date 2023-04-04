var express = require('express');
var path = require('path');
var http = require('http');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
let app = express();

let index = require('./server/routes/app');
const characterRoutes = require('./server/routes/characters');
const eraRoutes = require('./server/routes/eras');
const movieRoutes = require('./server/routes/movies');
const spinoffRoutes = require('./server/routes/spinoffs');

mongoose.connect("mongodb+srv://adminUser:0XxCSn2waAAje29X@cluster0.lcph8tp.mongodb.net/wdd-301-disney",
    { useNewUrlParser: true }, (err, res) => {
        if (err) {
        console.log('Connection failed: ' + err);
        }
        else {
        console.log('Connected to database!');
        }
    }
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cookieParser());

app.use(logger('dev'));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.setHeader(
      'Access-Control-Allow-Methods',
      'GET, POST, PATCH, PUT, DELETE, OPTIONS'
    );
    next();
  });

app
    .use('/', index)
    .use('/api/characters', characterRoutes)
    .use('/eras', eraRoutes)
    .use('/movies', movieRoutes)
    .use('/spinoffs', spinoffRoutes)

app.use(express.static(path.join(__dirname, 'dist/disney-animation-app')));

app.use('/characters', characterRoutes);
app.use('/eras', eraRoutes);
app.use('/movies', movieRoutes);
app.use('/spinoffs', spinoffRoutes);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/disney-animation-app/index.html'));
});
  

const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);
  
server.listen(port, function() {
    console.log('API running on localhost: ' + port)
});
  