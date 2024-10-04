document.addEventListener('turbolinks:load', function () {
    let localModeratorRadioButton = document.getElementById('localModerator');
    let regularUserRadioButton = document.getElementById('regularUser');
    let bootcampUserRadioButton = document.getElementById('bootcampUser'); // New line

    if (localModeratorRadioButton) {
        localModeratorRadioButton.addEventListener('change', toggleFields);
    }

    if (regularUserRadioButton) {
        regularUserRadioButton.addEventListener('change', toggleFields);
    }

    if (bootcampUserRadioButton) { // New block
        bootcampUserRadioButton.addEventListener('change', toggleFields);
    }

    toggleFields(); // Initialize the form with the correct fields visible
});

function toggleFields() {
    let localModeratorRadioButton = document.getElementById('localModerator');
    let regularUserRadioButton = document.getElementById('regularUser');
    let bootcampUserRadioButton = document.getElementById('bootcampUser'); // New line

    // Ensure all radio buttons exist before accessing their checked state
    if (localModeratorRadioButton && regularUserRadioButton && bootcampUserRadioButton) {
        let localModerator = localModeratorRadioButton.checked;
        let regularUser = regularUserRadioButton.checked;
        let bootcampUser = bootcampUserRadioButton.checked; // New line

        let registrationKeyField = document.getElementById('registrationKeyField');
        let signUpCodeField = document.getElementById('signUpCodeField');
        let bootcampCodeField = document.getElementById('bootcampCodeField'); // New line

        if (registrationKeyField) {
            registrationKeyField.style.display = localModerator ? 'block' : 'none';
        }

        if (signUpCodeField) {
            signUpCodeField.style.display = regularUser ? 'block' : 'none';
        }

        if (bootcampCodeField) { // New block
            bootcampCodeField.style.display = bootcampUser ? 'block' : 'none';
        }
    }
}