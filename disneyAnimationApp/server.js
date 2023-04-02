var express = require('express');
var path = require('path');
var http = require('http');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');

let index = require('./server/routes/app');
const characterRoutes = require('./server/routes/characters');
const eraRoutes = require('./server/routes/eras');
const movieRoutes = require('./server/routes/movies');
const spinoffRoutes = require('./server/routes/spinoffs');