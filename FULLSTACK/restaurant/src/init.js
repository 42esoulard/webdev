import cockatooLogo_img from './cockatoo_logo.png';
import cookieLogo_img from './cookies_logo.png';
import veganLogo_img from './vegan_logo.png';
import ethicalLogo_img from './ethical_logo.png';
import fairtradeLogo_img from './fairtrade_logo.png';
import ecoloLogo_img from './ecolo_logo.png';

import cookieBg_img from './cookies_img.png';
import cookiePattern_img from './cookies_pattern.jpg';

export {initHTML};


function initHTML() {
    const body = document.querySelector('body');
    body.style.backgroundImage = `url(${cookiePattern_img})`;
    
    /* BACKGROUND IMG */
    const content = document.querySelector('div[id="content"]');
    content.style.backgroundImage = `url(${cookieBg_img})`;

    loadHeader();

    /* -------------------- */

    loadMain();

    /* -------------------- */
    loadHome();
    /* ----------------------- */

    loadFooter();
}

function hidePageContent() {
    // while (myNode.firstChild) {
    //     myNode.removeChild(myNode.lastChild);
    // }
}

function showPageContent(page) {
    const pageContent = document.querySelector('div[class="pageContent"]');
 
    pageContent.appendChild(page);
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

    // SHOW DOESNT WORK, LOAD EACH TIME AND FUCK THE RESOURCES

    navHome.addEventListener('click', loadHome); 
    navMenu.addEventListener('click', loadMenu); 
    navContact.addEventListener('click', loadContact);
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


function loadHome() {
    /*  !!home page content!!   */
    const pageContent = document.querySelector('div[class="pageContent"]');

    const homePage = document.createElement('div');
    homePage.classList.add('homePage');
    homePage.id = 'tab';

    const veganLogo = new Image();
    veganLogo.src = veganLogo_img;
    veganLogo.classList.add('label');
    veganLogo.title = 'Vegan';
    const fairtradeLogo = new Image();
    fairtradeLogo.src = fairtradeLogo_img;
    fairtradeLogo.classList.add('label');
    fairtradeLogo.title = 'Fairtrade';
    const ecoloLogo = new Image();
    ecoloLogo.src = ecoloLogo_img;
    ecoloLogo.classList.add('label');
    ecoloLogo.title = 'Sustainable';
    homePage.append(veganLogo, fairtradeLogo, ecoloLogo);

    const presentationText = document.createElement('p');
    presentationText.textContent = 'Us Cockatoos harvest all our ingredients ourselves and fly them back in our beaks all the way from our home in the Solomon Islands!';
    presentationText.classList.add('presentationText');
    homePage.appendChild(presentationText)
    
    const presentationList = document.createElement('ul');
    presentationList.textContent = 'Our cookies are made with';
    presentationList.classList.add('presentationList');
    homePage.appendChild(presentationList);
    const item_1 = document.createElement('li');
    item_1.textContent = '85% cocoa fairtrade chocolate,';
    const item_2 = document.createElement('li');
    item_2.textContent = 'Bourbon vanilla pods,';
    const item_3 = document.createElement('li');
    item_3.textContent = 'Featherweight flour,';
    const item_4 = document.createElement('li');
    item_4.textContent = 'Sugarcane sugar,';
    const item_5 = document.createElement('li');
    item_5.textContent = 'Coconut oil,';
    const item_6 = document.createElement('li');
    item_6.textContent = 'Love';
    presentationList.append(item_1, item_2, item_3, item_4, item_5, item_6);
    
    pageContent.appendChild(homePage);
    return homePage;
    /*  !!end of home page content!!   */
}

function loadMenu() {
    
}

function loadContact() {
    
}
