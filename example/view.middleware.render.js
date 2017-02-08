'use strict';

const template = require.resolve('./index.pug');


module.exports = viewMiddleware;


function viewMiddleware(req, res, next) {
    res.renderAfterPromises(template);
}
