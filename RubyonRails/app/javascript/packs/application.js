// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
import 'controllers'
import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"

Rails.start(***REMOVED***
Turbolinks.start(***REMOVED***
ActiveStorage.start(***REMOVED***

import 'bootstrap'
import 'autosize'

document.addEventListener("turbolinks:load", (***REMOVED*** => {
  $('[data-toggle="tooltip"]'***REMOVED***.tooltip(***REMOVED***;
  $('[data-toggle="popover"]'***REMOVED***.popover(***REMOVED***;
  autosize(document.querySelectorAll('textarea'***REMOVED******REMOVED***;
***REMOVED******REMOVED***

function hideInput(***REMOVED*** {
  var colDiv = document.getElementById("normalCol"***REMOVED***;
  colDiv.style.display === "block" ? colDiv.style.display = 'none' : colDiv.style.display = 'block';
***REMOVED***





document.addEventListener("turbolinks:load", function(***REMOVED*** {
  // reset the active tab when the page is loaded
  $(".tab-content.active"***REMOVED***.removeClass("active"***REMOVED***;
  $(".tab.active"***REMOVED***.removeClass("active"***REMOVED***;

  // set the active tab based on the URL anchor
  var tabAnchor = window.location.hash.substring(1***REMOVED***;
  $("#" + tabAnchor + "-content"***REMOVED***.addClass("active"***REMOVED***;
  $("#" + tabAnchor + "-tab"***REMOVED***.addClass("active"***REMOVED***;

  // update the URL anchor when a tab is clicked
  $(".tab"***REMOVED***.on("click", function(***REMOVED*** {
    var tabAnchor = $(this***REMOVED***.attr("id"***REMOVED***;
    window.location.hash = tabAnchor;
  ***REMOVED******REMOVED***;
***REMOVED******REMOVED***;

