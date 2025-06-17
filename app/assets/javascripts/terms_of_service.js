function showText(event) {
    event.preventDefault();  // Prevent form submission
    document.getElementById('tos-model').style.display = 'flex';
    document.getElementById('tos-model').style.height = 'auto';
}

function tosAccept(event) {
    event.preventDefault();
    document.getElementById("tos-model").style.display = 'none';
    document.getElementById("tos-checkbox").checked = true;
    document.getElementById("tos-accepted").value = true;
}