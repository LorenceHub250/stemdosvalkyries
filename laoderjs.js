// JavaScript to manage the loader
window.addEventListener('load', function () {
    const loader = document.getElementById('loader');
    loader.classList.add('hide');

    // Make sure the loader is removed from the DOM or hidden after the transition
    setTimeout(() => {
        loader.style.display = 'none'; // Hides the loader completely
    }, 500); // Wait for the fade-out transition to complete
});

// Show loader on page link clicks (optional)
document.addEventListener('click', function (event) {
    const loader = document.getElementById('loader');
    if (event.target.tagName === 'A' && event.target.href) {
        event.preventDefault(); // Stop the default link action
        loader.classList.remove('hide'); // Show the loader again
        setTimeout(() => {
            window.location.href = event.target.href; // After a brief delay, load the link
        }, 300); // Adjust this delay as needed
    }
});
