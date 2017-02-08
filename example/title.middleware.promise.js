'use strict';

const Promise = require('bluebird');


module.exports = titleMiddleware;


function titleMiddleware(req, res, next) {
    res.promises.title = new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve('res promises example');
        }, 1000);
    });

    next();
}
