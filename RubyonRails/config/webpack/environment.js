const { environment ***REMOVED*** = require('@rails/webpacker'***REMOVED***

module.exports = environment

const webpack = require('webpack'***REMOVED***
environment.plugins.prepend('Provide',
  new webpack.ProvidePlugin({
    $: 'jquery',
    Popper: ['popper.js', 'default']
  ***REMOVED******REMOVED***
***REMOVED***
