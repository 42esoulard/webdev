import cockatooLogo_img from './cockatoo_logo.png';
import cookieLogo_img from './cookies_logo.png';
import veganLogo_img from './vegan_logo.png';
import ethicalLogo_img from './ethical_logo.png';
import fairtradeLogo_img from './fairtrade_logo.png';
import ecoloLogo_img from './ecolo_logo.png';
import cockatooBig_img from './bird_flipped.png'
import cookieBig_img from './cookiesLeft_logo.png';
import cookieBg_img from './cookies_img.png';
import cookiePattern_img from './cookies_pattern.jpg';
export {cookieBig_img, veganLogo_img, ethicalLogo_img, fairtradeLogo_img, ecoloLogo_img, cockatooBig_img}


import { loadContact } from './contact';
import { loadHome } from './home';
import { loadMenu } from './menu'
export {initHTML};


function initHTML() {
    const body = document.querySelector('body');
    body.style.backgroundImage = `url(${cookiePattern_img})`;
    
    /* BACKGROUND IMG */
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
    // return prevPage;
}


function loadHeader() {

    const content = document.querySelector('div[id="content"]');

    /* ADDING HEADER */
    const header = document.createElement('header');
    content.appendChild(header);

    /*   images   */
    const cockatooLogo = new Image();
    cockatooLogo.src = cockatooLogo_img;
    cockatooLogo.classList.add('logo');
    
    const cookieLogo = new Image();
    cookieLogo.src = cookieLogo_img;
    cookieLogo.classList.add('logo');

    /*   name   */
    const siteName = document.createElement('div');
    siteName.textContent = 'Cockatoo Cookies';
    siteName.classList.add('siteName');
    header.appendChild(cookieLogo);
    header.appendChild(siteName);
    header.appendChild(cockatooLogo);
}

function loadMain() {
    const content = document.querySelector('div[id="content"]');

    /* ADDING MAIN CONTENT */
    const main = document.createElement('div');
    main.classList.add('main');
    content.appendChild(main);

    const motto = document.createElement('div');
    motto.textContent = 'Our cookies will drive you cuckoo!';
    motto.classList.add('motto');
    main.appendChild(motto);

    const pageContent = document.createElement('div');
    pageContent.classList.add('pageContent');
    main.appendChild(pageContent);

    /*   navigation bar   */
    const navBar = document.createElement('nav');
    navBar.classList.add('navBar');
    pageContent.appendChild(navBar);
    const navHome = document.createElement('li');
    navHome.textContent = 'Home';
    navHome.classList.add('navButton');
    const navMenu = document.createElement('li');
    navMenu.textContent = 'Menu';
    navMenu.classList.add('navButton');
    const navContact = document.createElement('li');
    navContact.textContent = 'Contact';
    navContact.classList.add('navButton');
    navBar.append(navHome, navMenu, navContact);

    // /!\ ONLY LOAD ONCE, THEN ON EVENT CALL SHOWPAGE
    const contentHome = loadHome();
    const contentMenu = loadMenu();
    const contentContact = loadContact();
    navHome.addEventListener('click', function() { showPageContent(contentHome)}); 
    navMenu.addEventListener('click', function() { showPageContent(contentMenu)}); 
    navContact.addEventListener('click', function() { showPageContent(contentContact)});

    showPageContent(contentContact);
}

function loadFooter() {
    const content = document.querySelector('div[id="content"]');
    /* ADDING FOOTER */
    const footer = document.createElement('footer');
    content.appendChild(footer);
    // footer.classList.add('motto');

    //Built by esoulard
    const copyright = document.createElement('div');
    copyright.textContent = 'Built by ';
    const esou = document.createElement('a');
    esou.href = 'https://github.com/42esoulard';
    esou.title = 'esoulard';
    esou.textContent = 'esoulard';
    copyright.appendChild(esou);
    footer.appendChild(copyright);

    // Icons made by Freepik from www.flaticon.com
    const freepik = document.createElement('div');
    freepik.textContent = 'Icons and Food Vector made by  from ';
    let text = freepik.childNodes[0];
    let at = 30;
    const freepikLink = document.createElement('a');
    freepikLink.href = 'https://www.freepik.com';
    freepikLink.title = 'Freepik';
    freepikLink.textContent = 'Freepik'
    freepik.insertBefore(freepikLink, text.splitText(at));
    const flaticon = document.createElement('a');
    flaticon.href = 'https://www.flaticon.com';
    flaticon.title = 'Flaticon';
    flaticon.textContent = 'www.flaticon.com';
    freepik.appendChild(flaticon);
    footer.appendChild(freepik);

    //Photo by <a href="https://unsplash.com/@picoftasty?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Mae Mu</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
    const photoCredit = document.createElement('div');
    photoCredit.textContent = 'Background photo by  on ';
    text = photoCredit.childNodes[0];
    at = 20;
    const photoCreditLink = document.createElement('a');
    photoCreditLink.href = 'https://unsplash.com/@picoftasty?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText';
    photoCreditLink.title = 'Mae Mu';
    photoCreditLink.textContent = 'Mae Mu'
    photoCredit.insertBefore(photoCreditLink, text.splitText(at));
    const unsplash = document.createElement('a');
    unsplash.href = 'https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText';
    unsplash.title = 'Unsplash';
    unsplash.textContent = 'Unsplash';
    photoCredit.appendChild(unsplash);
    footer.appendChild(photoCredit);
    // freepik.classList.add('motto');
    /* ----------------------- */
}


