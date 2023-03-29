const webpack = require('@cypress/webpack-preprocessor');

module.exports = (on: (arg0: string, arg1: any) => void) => {
    const options = {
        webpackOptions: require('../../webpack.common.js'),
        watchOptions: {},
    };
    on('file:preprocessor', webpack(options));
};
