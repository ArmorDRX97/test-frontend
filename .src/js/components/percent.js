const buttonPercent = document.querySelector('.percent-trigger');
const progress = document.querySelector('.progress .percent');
const count = document.querySelector('.progress .percent .count');
buttonPercent.addEventListener('click', function () {
    const percent = parseInt(buttonPercent.textContent.match(/\d+/));
    progress.style.width = percent + "%";
    count.innerHTML = percent;
});