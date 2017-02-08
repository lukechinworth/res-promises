'use strict';

const Promise = require('bluebird');


module.exports = headingMiddleware;


function headingMiddleware(req, res, next) {
    res.promises.heading = new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve('Waited for data before rendering!');
        }, 2000);
    });

    next();
}
