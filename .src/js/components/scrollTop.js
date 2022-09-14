const scrollBtn = document.querySelector('.scroll-top');
scrollBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});