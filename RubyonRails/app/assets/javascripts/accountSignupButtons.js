document.addEventListener('DOMContentLoaded', function () {
    let localModeratorRadioButton = document.getElementById('localModerator');
    let regularUserRadioButton = document.getElementById('regularUser');
    let bootcampUserRadioButton = document.getElementById('bootcampUser'); // New line

    if (localModeratorRadioButton) {
        localModeratorRadioButton.addEventListener('change', toggleFields);
    }

    if (regularUserRadioButton) {
        regularUserRadioButton.addEventListener('change', toggleFields);
    }

    toggleFields(); // Initialize the form with the correct fields visible
});

function toggleFields() {
    let localModeratorRadioButton = document.getElementById('localModerator');
    let regularUserRadioButton = document.getElementById('regularUser');

    // Ensure all radio buttons exist before accessing their checked state
    if (localModeratorRadioButton && regularUserRadioButton) {
        let localModerator = localModeratorRadioButton.checked;
        let regularUser = regularUserRadioButton.checked;

        let registrationKeyField = document.getElementById('registrationKeyField');
        let signUpCodeField = document.getElementById('signUpCodeField');

        let registrationKey = document.getElementById('registrationKey');
        let moderatorKey = document.getElementById('moderatorKey');

        if (registrationKeyField) {
            registrationKeyField.style.display = localModerator ? 'block' : 'none';
            registrationKey.required = localModerator ? true : false;
        }

        if (signUpCodeField) {
            signUpCodeField.style.display = regularUser ? 'block' : 'none';
            moderatorKey.required = regularUser ? true : false;
        }

    }
}
