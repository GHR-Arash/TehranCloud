// Function to load menu content
function loadMenu() {
    fetch('menu.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('menu-placeholder').innerHTML = data;
        });
}

// Call the function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', loadMenu);