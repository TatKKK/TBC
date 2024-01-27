window.addEventListener('scroll', () => {
    const header = document.querySelector('.site-header');
    if (window.scrollY > 84) { 
        header.style.backgroundColor = ' rgba(26,30,31,.8)';
    } else {
        header.style.backgroundColor = '#1A1E1F';
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const accItems = document.querySelectorAll('.acc-item');

    accItems.forEach(item => {
        item.addEventListener('click', function() {

            this.classList.toggle('active');

            const content = this.nextElementSibling;

            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    });
});

function toggleMenu() {
    let menu = document.querySelector("#menu-items");
    menu.classList.toggle("hidden");
    console.log('Menu toggled');
}

let closeButton = document.querySelector(".close");
closeButton.addEventListener('click', () => {
    let menu = document.querySelector("#menu-items");
    menu.classList.add("hidden");
    console.log('Menu closed');
});


// Scroll to top
let button = document.getElementById("btn");

window.onscroll = function() {
  scroll();
};

function scroll() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
}

function scrollUp() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}



