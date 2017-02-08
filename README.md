### Purpose
This middleware adds two properties to express's `res` object:
* `promises` - empty object for other middlewares to store promises on
* `renderAfterPromises` - method which waits for all promises on `res.promises` to resolve before calling `res.render` with promise resolutions

### Install
`npm install res-promises`

### Use
```
const express = require('express');
const resPromises = require('res-promises');

const app = express();

app.use(resPromises())
```
See `example` dir for how to use with other middleware.

### Options
* `resPromises([overrideResRender])` - boolean to override `res`'s `render` method. Default method name is `renderAfterPromises` 