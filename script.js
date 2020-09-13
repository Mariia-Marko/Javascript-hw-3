function addParagraph () {
    const pEl = document.createElement('textarea').innerHTML;
    const parentEl = document.querySelectorAll('div.text-old textarea')[0];

    if (!parentEl) {
        return;
    }

    parentEl.appendChild(pEl);
}

function clearHtmlText () {
    const divElementOld = document.querySelectorAll('div.text-old') [0];
    const textareaEl = divElementOld.querySelector('textarea');
    divElementOld.removeChild(textareaEl);

    const newTextareaEl = document.createElement('textarea');
    divElementOld.appendChild(newTextareaEl);
}

function addParagraph () {
    const pEl = document.createElement('textarea').innerHTML;
    const parentEl = document.querySelectorAll('div.text-old textarea')[0];

    if (!parentEl) {
        return;
    }

    parentEl.appendChild(pEl);
}

function clearConvertedText () {
    const divElementNew = document.querySelectorAll('div.text-new')[0];
    const textareaElementNew = divElementNew.querySelector('p');
    divElementNew.removeChild(textareaElementNew);

    const newTextareaEl2 = document.createElement('p');
    divElementNew.appendChild(newTextareaEl2);
}

function myFunction () {
    const x = document.getElementById('oldText').value;
    
    if (x !== 'bobik') {
        document.getElementById('newText').innerHTML = x;
    }
}

//select 
const select = function () {
    const selectHeader = document.querySelectorAll('.select__header');
    const selectItem = document.querySelectorAll('.select__item');

    selectHeader.forEach(item => {
        item.addEventListener('click', selectToggle) 
    });

    selectItem.forEach(item => {
        item.addEventListener('click', selectChoose) 
    });

    function selectToggle() {
        this.parentElement.classList.toggle('is-active');
    }

    function selectChoose() {
        const text = this.innerText;
        const select = this.closest('.select');
        const currrentText = select.querySelector('.select__current');

        currrentText.innerText = text;

        select.classList.remove('is-active');
    }
};
select();

function red () {
    const corol = document.getElementById('newText').classList.add('red');
}

function maroon () {
    const corol = document.getElementById('newText').classList.add('maroon');
}

function mediumorchid () {
    const corol = document.getElementById('newText').classList.add('mediumorchid');
}

function coral () {
    const corol = document.getElementById('newText').classList.add('coral');
}

function green () {
    const corol = document.getElementById('newText').classList.add('green');
}