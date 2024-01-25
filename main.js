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
