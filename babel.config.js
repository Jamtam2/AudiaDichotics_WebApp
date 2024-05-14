module.exports = function(api***REMOVED*** {
  var validEnv = ['development', 'test', 'production']
  var currentEnv = api.env(***REMOVED***
  var isDevelopmentEnv = api.env('development'***REMOVED***
  var isProductionEnv = api.env('production'***REMOVED***
  var isTestEnv = api.env('test'***REMOVED***

  if (!validEnv.includes(currentEnv***REMOVED******REMOVED*** {
    throw new Error(
      'Please specify a valid `NODE_ENV` or ' +
        '`BABEL_ENV` environment variables. Valid values are "development", ' +
        '"test", and "production". Instead, received: ' +
        JSON.stringify(currentEnv***REMOVED*** +
        '.'
    ***REMOVED***
  ***REMOVED***

  return {
    presets: [
      isTestEnv && [
        '@babel/preset-env',
        {
          targets: {
            node: 'current'
          ***REMOVED***
        ***REMOVED***
      ],
      (isProductionEnv || isDevelopmentEnv***REMOVED*** && [
        '@babel/preset-env',
        {
          forceAllTransforms: true,
          useBuiltIns: 'entry',
          corejs: 3,
          modules: false,
          exclude: ['transform-typeof-symbol']
        ***REMOVED***
      ]
    ].filter(Boolean***REMOVED***,
    plugins: [
      'babel-plugin-macros',
      '@babel/plugin-syntax-dynamic-import',
      isTestEnv && 'babel-plugin-dynamic-import-node',
      '@babel/plugin-transform-destructuring',
      [
        '@babel/plugin-proposal-class-properties',
        {
          loose: true
        ***REMOVED***
      ],

      [
        '@babel/plugin-proposal-private-methods',
        {
          loose: true
        ***REMOVED***
      ],
      [
        '@babel/plugin-proposal-object-rest-spread',
        {
          useBuiltIns: true
        ***REMOVED***
      ],
      [
        '@babel/plugin-transform-runtime',
        {
          helpers: false
        ***REMOVED***
      ],
      [
        '@babel/plugin-transform-regenerator',
        {
          async: false
        ***REMOVED***
      ],
      [
        '@babel/plugin-proposal-private-property-in-object',
        {
          loose: true
        ***REMOVED***
      ]
    ].filter(Boolean***REMOVED***
  ***REMOVED***
***REMOVED***