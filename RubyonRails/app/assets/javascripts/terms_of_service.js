// document.addEventListener("DOMContentLoaded", function() {
//     const termsButton = document.getElementById("tos-button");
//     const termsText = document.getElementById("tos-model");
//     const termsAccept = document.getElementById("tos-accept");
//     const termsCheckbox = document.getElementById("tos-checkbox");

//     termsButton.addEventListener("click", function() { 
//         termsText.style.display = 'flex'; 
//     });
// });

function showText(event) {
    event.preventDefault();  // Prevent form submission
    const tosPopup = document.getElementById('tos-model');
    
    if (tosPopup) {
        tosPopup.style.display = 'flex'; // Show the ToS popup
    } else {
        console.error('ToS popup element not found!');
    }
}

function hideText() {
    document.getElementById("tos-model").style.display = 'none';
}