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
  
  document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggle-button');
    const body = document.body;

    toggleButton.addEventListener('click', () => {
        body.classList.toggle('light-mode');
        body.classList.toggle('dark-mode');
    });

    // Set initial mode based on user's preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        body.classList.add('dark-mode');
    } else {
        body.classList.add('light-mode');
    }
});


document.addEventListener('DOMContentLoaded', function() {
  const popup = document.getElementById('popup');
  const closeBtn = document.getElementById('closeBtn');
  const neverShowAgain = document.getElementById('neverShowAgain');

  if (!localStorage.getItem('neverShowPopup')) {
      popup.style.display = 'block';
  }

  closeBtn.addEventListener('click', function() {
      if (neverShowAgain.checked) {
          localStorage.setItem('neverShowPopup', 'true');
      }
      popup.style.display = 'none';
  });
});