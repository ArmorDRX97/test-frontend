const accordion = document.querySelector('.accordion');
const trigger = accordion.querySelector('.accordion-trigger');
trigger.addEventListener('click', function () {
    this.classList.toggle("active");
    let content = this.previousElementSibling;
    if (content.style.maxHeight) {
        content.style.maxHeight = null;
    } else {
        content.style.maxHeight = content.scrollHeight + "px";
    }
});
