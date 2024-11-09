// JavaScript to toggle the navigation menu on mobile devices
document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.button');
    const nav = document.querySelector('.nav');

    button.addEventListener('click', () => {
        nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
    });
});
