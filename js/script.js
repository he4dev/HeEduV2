document.querySelectorAll('.nav-img').forEach(img => {
    if (img.parentElement.pathname === window.location.pathname) {
        img.classList.add('active');
    }
});
