import { Application ***REMOVED*** from "stimulus"
import { definitionsFromContext ***REMOVED*** from "stimulus/webpack-helpers"

const application = Application.start(***REMOVED***
const context = require.context(".", true, /\.js$/***REMOVED***
application.load(definitionsFromContext(context***REMOVED******REMOVED***