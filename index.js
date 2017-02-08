'use strict';

const BB = require('bluebird');
const _ = require('lodash');


module.exports = resPromises;


function resPromises(overrideResRender) {
    var renderMethodName = overrideResRender ? 'render' : 'renderAfterPromises';

    return function(req, res, next) {
        // attach to this object anything you want to wait to render for
        res.promises = {};

        var render = res.render;

        res[renderMethodName] = function(template, viewModel) {
            // wait for all promises attached to resolve before calling render with resolutions
            BB.props(res.promises)
                .then(function(promiseResolutions) {
                    render.call(res, template, _.extend({}, promiseResolutions, viewModel));
                });
        };

        next();
    };
}