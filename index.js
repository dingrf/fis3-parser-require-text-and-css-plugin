'use strict';

var html2js = require('html2js');
var css2js = require('fis3-preprocessor-css2js');

module.exports = function(content, file, conf){
    if (!file.amdPlugin) return;
    switch (file.amdPlugin) {
        case 'text':
            content = html2js(content, {
                mode: 'compress',
                wrap: 'commonjs'
            });
            break;
        case 'css':
            content = css2js.processCss(content, {
                template: 'requirejs_runner',
                id: file.id
            });
        default:
            break;
    }

    return content;
};
