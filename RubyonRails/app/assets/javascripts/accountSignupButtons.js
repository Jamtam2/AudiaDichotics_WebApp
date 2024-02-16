document.addEventListener('turbolinks:load', function (***REMOVED*** {
    let localModeratorRadioButton = document.getElementById('localModerator'***REMOVED***;
    let regularUserRadioButton = document.getElementById('regularUser'***REMOVED***;
    let locationModeratorRadioButton = document.getElementById('locationModerator'***REMOVED***;


    localModeratorRadioButton.addEventListener('change', toggleFields***REMOVED***;
    regularUserRadioButton.addEventListener('change', toggleFields***REMOVED***;
    locationModeratorRadioButton.addEventListener('change', toggleFields***REMOVED***;


    toggleFields(***REMOVED***; // Initialize the form with the correct fields visible
***REMOVED******REMOVED***;

function toggleFields(***REMOVED*** {
    let localModerator = document.getElementById('localModerator'***REMOVED***.checked;
    let regularUser = document.getElementById('regularUser'***REMOVED***.checked;
    let locationModerator = document.getElementById('locationModerator'***REMOVED***.checked;


    let registrationKeyField = document.getElementById('registrationKeyField'***REMOVED***;
    let signUpCodeField = document.getElementById('signUpCodeField'***REMOVED***;

    registrationKeyField.style.display = localModerator || regularUser ? 'block' : 'none';
    signUpCodeField.style.display = regularUser || locationModerator ? 'block' : 'none';
***REMOVED***
