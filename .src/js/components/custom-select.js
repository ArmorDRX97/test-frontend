document.addEventListener('DOMContentLoaded', createSelect, false);
function createSelect() {
    var select = document.getElementsByClassName('custom-select'),
        liElement,
        ulElement,
        optionValue,
        iElement,
        optionText,
        selectDropdown,
        elementParentSpan;

    for (var j = 0; j < select.length; j++) {

        select[j].style.display = 'none';
        wrapElement(document.getElementById(select[j].id), document.createElement("div"), j);

        for (var i = 0; i < select[j].options.length; i++) {
            liElement =  document.createElement("li");
            optionValue = select[j].options[i].value;
            optionText = document.createTextNode(select[j].options[i].text);
            liElement.className = 'select-dropdown__list-item';
            liElement.setAttribute('data-value',optionValue );
            liElement.appendChild(optionText);
            ulElement.appendChild(liElement);

            liElement.addEventListener('click', function () {
                displyUl(this);
            }, false);
        }
    }
    function wrapElement(el, wrapper, i) {
        el.parentNode.insertBefore(wrapper, el);
        wrapper.appendChild(el);

        var buttonElement = document.createElement("div"),
            spanElement = document.createElement("span"),
            spanText = document.createTextNode("Выбрать город");
        iElement = document.createElement("i");
        ulElement = document.createElement("ul");

        wrapper.className = 'select-dropdown select-dropdown--'+ i;
        buttonElement.className = 'select-dropdown__button select-dropdown__button--' + i;
        buttonElement.setAttribute('data-value', '' );
        spanElement.className = 'select-dropdown select-dropdown--'+ i;
        iElement.className = 'icon icon-chevron-down';
        ulElement.className = 'select-dropdown__list select-dropdown__list--'+ i;
        ulElement.id = 'select-dropdown__list-'+ i;

        wrapper.appendChild(buttonElement);
        spanElement.appendChild(spanText);
        buttonElement.appendChild(spanElement);
        buttonElement.appendChild(iElement);
        wrapper.appendChild(ulElement);
    }

    function displyUl(element){

        if(element.tagName == 'DIV'){
            selectDropdown = element.parentNode.getElementsByTagName('ul');
            for (var i = 0, len = selectDropdown.length; i < len; i++) {
                selectDropdown[0].classList.toggle("active");
            }
        }else if(element.tagName == 'LI'){
            var selectId = element.parentNode.parentNode.getElementsByTagName('select')[0];
            selectElement(selectId.id, element.getAttribute('data-value'));
            elementParentSpan = element.parentNode.parentNode.getElementsByTagName('span');
            element.parentNode.classList.toggle("active");
            elementParentSpan[0].textContent = element.textContent;
            elementParentSpan[0].parentNode.setAttribute('data-value', element.getAttribute('data-value'));
        }

    }
    function selectElement(id, valueToSelect) {
        var element = document.getElementById(id);
        element.value = valueToSelect;
        element.setAttribute('selected', 'selected');
    }
    var buttonSelect = document.getElementsByClassName('select-dropdown__button');
    for (var i = 0, len = buttonSelect.length; i < len; i++) {
        buttonSelect[i].addEventListener('click', function () {
            displyUl(this);
            this.classList.toggle('active');
        }, false);
    }
}

document.addEventListener('click', function (event) {
    if (!event.target.closest('.select-dropdown__button')) {
        const selectList = document.querySelectorAll('.select-dropdown__list');
        for (let i = 0; i <= selectList.length; i++) {
            if (selectList[i] !== undefined) {
                var buttonSelect = document.getElementsByClassName('select-dropdown__button');
                buttonSelect[i].classList.remove('active');
                selectList[i].classList.remove('active');
            }
        }
    }
});