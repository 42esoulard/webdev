import './style.css'

import iconAddItem from './addItem.png'
import iconAddProject from './addProject.png'

import iconDel from './delete.png';
import iconPrioHigh from './high.png';
import iconPrioMed from './medium.png';
import iconPrioLow from './low.png';

import iconChecked from './checked.png';
import iconUnchecked from './unchecked.png';

import { itemsHandler } from './items'
import { mediator } from './mediator'
import { importLocalStorage, exportToLocalStorage } from './storage';

export { itemsHandler }
export {
    iconAddItem,
    iconAddProject,
    iconDel,
    iconPrioHigh,
    iconPrioMed,
    iconPrioLow,
    iconChecked,
    iconUnchecked,
}

import { demo } from './demo.js'

const DEFAULT_SORT_TYPE = 'dueDate'

const setNavEvents = (function () {
    const navButtonSave = document.querySelector('div[class="navButton"]');
    navButtonSave.addEventListener('click', exportToLocalStorage);

    const navButtons = document.querySelectorAll('li[class="navButton"]');
    navButtons.forEach(button => button.addEventListener('click', function () {
        mediator.sort(button.id);
    }))
})()

const initApp = (function () {

    mediator.initPickers();
    demo();
    importLocalStorage();
    mediator.sort(DEFAULT_SORT_TYPE);
    
})()