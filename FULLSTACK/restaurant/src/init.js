import cockatooLogo_img from './cockatoo_logo.png';
import cookieLogo_img from './cookies_logo.png';
import veganLogo_img from './vegan_logo.png';
import fairtradeLogo_img from './fairtrade_logo.png';
import ecoloLogo_img from './ecolo_logo.png';
import cockatooBig_img from './bird_flipped.png'
import cookieBig_img from './cookiesLeft_logo.png';
import cookieBg_img from './cookies_img.png';
import cookiePattern_img from './cookies_pattern.jpg';
export {cookieBig_img, veganLogo_img, fairtradeLogo_img, ecoloLogo_img, cockatooBig_img}

import { loadContact } from './contact';
import { loadHome } from './home';
import { loadMenu } from './menu';

export {createElem, initHTML, loadHome, loadMenu, loadContact, showPageContent};


function initHTML() {
    const body = document.querySelector('body');
    body.style.backgroundImage = `url(${cookiePattern_img})`;
    
    const content = document.querySelector('div[id="content"]');
    content.style.backgroundImage = `url(${cookieBg_img})`;

    loadHeader();
    loadMain();
    loadFooter();
}


function showPageContent(page) {
    const pageContent = document.querySelector('div[class="pageContent"]');
    const prevPage = document.querySelector('div[id="tab"]');
    if (prevPage)
        pageContent.removeChild(prevPage);
    pageContent.appendChild(page);
}

function createElem(type, style, text, title, id, link) {
    const newElem = document.createElement(type);
    if (style)
        newElem.classList.add(style);
    if (text)
        newElem.textContent = text;
    if (title)
        newElem.title = title;
    if (id)
        newElem.id = id;
    if (link)
        newElem.href = link;
    return newElem;
}

function loadHeader() {

    const content = document.querySelector('div[id="content"]');

    const header = createElem('header');
    content.appendChild(header);

    const cockatooLogo = createElem('img', 'logo');
    cockatooLogo.src = cockatooLogo_img;
    
    const cookieLogo = createElem('img', 'logo');
    cookieLogo.src = cookieLogo_img;

    const siteName = createElem('div', 'siteName', 'Cockatoo Cookies');

    header.append(cookieLogo, siteName, cockatooLogo);
}

function loadMain() {
    const content = document.querySelector('div[id="content"]');

    /* MAIN CONTENT */
    const main = createElem('div', 'main');
    content.appendChild(main);

    const motto = createElem('div', 'motto', 'Our cookies will drive you cuckoo!');

    const pageContent = createElem('div', 'pageContent');
    main.append(motto, pageContent);

    /*   navigation bar   */
    const navBar = createElem('nav', 'navBar');
    pageContent.appendChild(navBar);

    const navHome = createElem('li','navButton', 'Home', '', '0');
    const navMenu = createElem('li', 'navButton', 'Menu', '', '1');
    const navContact = createElem('li', 'navButton', 'Contact', '', '2');

    navBar.append(navHome, navMenu, navContact);
}

function loadFooter() {
    const content = document.querySelector('div[id="content"]');

    const footer = createElem('footer');
    content.appendChild(footer);

    //Built by esoulard
    const copyright = createElem('div', '', 'Built by ');
    const esou = createElem('a', '', 'esoulard', 'esoulard', '', 'https://github.com/42esoulard');
    copyright.appendChild(esou);
    footer.appendChild(copyright);

    // Icons made by Freepik from www.flaticon.com
    const freepik = createElem('div', '', 'Icons and Food Vector made by  from ');
    let text = freepik.childNodes[0];
    let at = 30;
    const freepikLink = createElem('a', '', 'Freepik', 'Freepik', '', 'https://www.freepik.com');
    freepik.insertBefore(freepikLink, text.splitText(at));
    const flaticon = createElem('a', '', 'www.flaticon.com', 'Flaticon', '', 'https://www.flaticon.com');
    freepik.appendChild(flaticon);
    footer.appendChild(freepik);

    //Photo by <a href="https://unsplash.com/@picoftasty?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Mae Mu</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
    const photoCredit = createElem('div', '', 'Background photo by  on ');
    text = photoCredit.childNodes[0];
    at = 20;
    const photoCreditLink = createElem('a', '', 'Mae Mu', 'Mae Mu', '', 'https://unsplash.com/@picoftasty?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText');
    photoCredit.insertBefore(photoCreditLink, text.splitText(at));
    const unsplash = createElem('a', '', 'Unsplash', 'Unsplash', '', 'https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText');
    photoCredit.appendChild(unsplash);
    footer.appendChild(photoCredit);
}


