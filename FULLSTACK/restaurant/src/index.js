import './style.css';
import {initHTML, 
        loadHome, 
        loadMenu, 
        loadContact, 
        showPageContent, } from './init.js';

initHTML();

// /!\ ONLY LOAD ONCE, THEN ON EVENT CALL SHOWPAGE
(function launchMenuEvents() {

    const navButtons = document.querySelectorAll('[class="navButton"]');
    const contentPages = [loadHome(), loadMenu(), loadContact()];

    navButtons.forEach(button => button.addEventListener('click', function() { showPageContent(contentPages[Number(button.id)])})); 

    showPageContent(contentPages[0]);
}())
