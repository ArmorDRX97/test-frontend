import './components/slider';
import './components/percent';
import './components/accordion';
import './components/custom-select';
import './components/scrollTop';
import './components/menu-dropdown';


window.onload = function () {
    const preloader = document.getElementById('loader');
    preloader.classList.add('load');
    setTimeout(function () {
        preloader.classList.add('hide');
    }, 200)
}




