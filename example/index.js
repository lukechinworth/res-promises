'use strict';

const express = require('express');
const resPromises = require('../index.js');
const titleMiddleware = require('./title.middleware.promise');
const headingMiddleware = require('./heading.middleware.promise');
const viewMiddleware = require('./view.middleware.render');

const app = express();

app.use(
    resPromises(true),
    titleMiddleware,
    headingMiddleware,
    viewMiddleware
);

app.listen(3000);