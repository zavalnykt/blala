//Модальне вікно
const contactBtn = document.getElementById('contactBtn');
const modal = document.getElementById('contactModal');
const closeBtn = document.querySelector('.close');

contactBtn.addEventListener('click', function(event) {
    event.preventDefault();
    modal.style.display = 'flex';
});

closeBtn.addEventListener('click', function() {
    modal.style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// Стрілка вверх

const scrollToTopBtn = document.getElementById('scrollToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopBtn.classList.add('show');
    } else {
        scrollToTopBtn.classList.remove('show');
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
