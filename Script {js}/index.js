
    window.addEventListener('offline', function() {
    document.getElementById('offline-popup').style.display = 'block';
});


function closePopup() {
    document.getElementById('offline-popup').style.display = 'none';
    document.getElementById('online-popup').style.display = 'none';
}

window.addEventListener('online', function() {
    document.getElementById('online-popup').style.display = 'block';
});


