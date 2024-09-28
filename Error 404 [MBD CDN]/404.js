window.addEventListener('error', function(event) {
    if (event.target.tagName === 'IMG') {
        event.target.src = '/path/to/404-image.png'; // Optional: Replace broken images with a 404 image
    } else {
        window.location.href = '/404.html';
    }
}, true);
