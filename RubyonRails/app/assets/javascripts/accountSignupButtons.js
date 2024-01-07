document.addEventListener('turbolinks:load', function (***REMOVED*** {
    let localModeratorRadioButton = document.getElementById('localModerator'***REMOVED***;
    let regularUserRadioButton = document.getElementById('regularUser'***REMOVED***;

    localModeratorRadioButton.addEventListener('change', toggleFields***REMOVED***;
    regularUserRadioButton.addEventListener('change', toggleFields***REMOVED***;

    toggleFields(***REMOVED***; // Initialize the form with the correct fields visible
***REMOVED******REMOVED***;

function toggleFields(***REMOVED*** {
    let localModerator = document.getElementById('localModerator'***REMOVED***.checked;
    let regularUser = document.getElementById('regularUser'***REMOVED***.checked;

    let registrationKeyField = document.getElementById('registrationKeyField'***REMOVED***;
    let signUpCodeField = document.getElementById('signUpCodeField'***REMOVED***;

    registrationKeyField.style.display = localModerator || regularUser ? 'block' : 'none';
    signUpCodeField.style.display = regularUser ? 'block' : 'none';
***REMOVED***
