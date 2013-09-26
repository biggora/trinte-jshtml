/**
 *  TrinteJS JsHtml Templates
 *
 *  @project     TrinteJS
 *  @version     0.0.1
 *  @package     trinte-jshtml
 *  @author      Aleksejs Gordejevs
 *  @created     2013-09-24 03:12:02
 * 
 *  Created by init script
 *  App based on TrinteJS MVC framework
 *  TrinteJS homepage http://www.trintejs.com
 **/
var engine = require('jshtml-express');
var fs = require('fs');

/**
 * Library version.
 **/
exports.version = '0.0.1';

/**
 * This file extension will be used by default for all template files
 **/
exports.extension = '.jshtml';

/**
 * View templating engine
 **/
exports.module = 'jshtml-express';

/**
 * Get source template filename
 * @param {String} name
 * @param {String} side
 **/
exports.getTemplate = function(name, side) {
    side = (side === 'frontend') ? 'frontend' : 'backend';
    return __dirname + '/templates/' + side + '/' + name + exports.extension;
};

/**
 * Get template text
 * @param {String} name
 * @param {String} side
 **/
exports.getTemplateText = function (name, side) {
    return fs.readFileSync(exports.getTemplate(name, side)).toString();
};

/**
 * Set JsHtmlTemplate Engine
 *
 * @param {Object} app
 * @api public
 **/
exports.setEngine = function(app) {
    app.configure(function() {
        app.engine('jshtml', engine);
        app.set('view engine', 'jshtml');
    });
};