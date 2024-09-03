function myFunction() {
    const input = document.getElementById('myInput');
    const filter = input.value.toUpperCase();
    const ul = document.getElementById("myUL");
    const li = ul.getElementsByTagName('li');
  
    for (let i = 0; i < li.length; i++) {
      const a = li[i].getElementsByTagName("a")[0];
      const txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }
  

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