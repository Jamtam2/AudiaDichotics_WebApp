document.addEventListener('turbolinks:load', function (***REMOVED*** {
    let localModeratorRadioButton = document.getElementById('localModerator'***REMOVED***;
    let regularUserRadioButton = document.getElementById('regularUser'***REMOVED***;

    localModeratorRadioButton.addEventListener('change', toggleFields***REMOVED***;
    regularUserRadioButton.addEventListener('change', toggleFields***REMOVED***;

    // Initialize the form with the correct fields visible
    toggleFields(***REMOVED***;
***REMOVED******REMOVED***;

function toggleFields(***REMOVED*** {
    let localModerator = document.getElementById('localModerator'***REMOVED***.checked;
    let regularUser = document.getElementById('regularUser'***REMOVED***.checked;
    document.getElementById('registrationKeyField'***REMOVED***.style.display = localModerator ? 'block' : 'none';
    document.getElementById('signUpCodeField'***REMOVED***.style.display = regularUser ? 'block' : 'none';
***REMOVED***
