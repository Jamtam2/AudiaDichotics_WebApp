// This file is for validating the "account type" field of the registration form to ensure that an option is selected


// Add listener to Sign up button
document.getElementById("registration_form").addEventListener("submit", checkAccountType);

// Check if the account_type variable has a value
// if not, display an error message on form
function checkAccountType(event) {
    account_types = document.getElementsByName("account_type");
    selected = Array.from(account_types).find(type => type.checked);
    if (!selected){
        // Prevent the form from being submitted and display error message
        event.preventDefault();
        document.getElementById("accountTypeErrorMessage").hidden = false;

        // Add listeners to account type radio buttons
        local_mod_button = document.getElementById("localModerator");
        regular_user_button = document.getElementById("regularUser");

        // If the user selects one, remove the error message
        local_mod_button.addEventListener("change", removeAccountTypeErrorMessage);
        regular_user_button.addEventListener("change", removeAccountTypeErrorMessage);
    }
    return
}

// Removes/hides error message
function removeAccountTypeErrorMessage(){
    document.getElementById("accountTypeErrorMessage").hidden = true;
    return
}
