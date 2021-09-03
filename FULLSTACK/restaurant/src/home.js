import {veganLogo_img,
        fairtradeLogo_img, 
        ecoloLogo_img, 
        createElem } from './init'


export {loadHome}

function loadHome() {

    const pageContent = document.querySelector('div[class="pageContent"]');

    const homePage = createElem('div', 'homePage', '', '', 'tab');

    const veganLogo = createElem('img', 'label', '', 'Vegan');
    veganLogo.src = veganLogo_img;
    const fairtradeLogo = createElem('img', 'label', '', 'Fairtrade');
    fairtradeLogo.src = fairtradeLogo_img;
    const ecoloLogo = createElem('img', 'label', '', 'Sustainable');
    ecoloLogo.src = ecoloLogo_img;
    homePage.append(veganLogo, fairtradeLogo, ecoloLogo);

    const presentationText = createElem('p', 'presentationText', 'Us Cockatoos harvest all our ingredients ourselves and fly them back in our beaks all the way from our home in the Solomon Islands!');
    homePage.appendChild(presentationText)
    
    const presentationList = createElem('ul', 'presentationList', 'Our cookies are made with');
    homePage.appendChild(presentationList);
    const item_1 = createElem('li', '', '85% cocoa fairtrade chocolate,');
    const item_2 = createElem('li', '', 'Bourbon vanilla pods,');
    const item_3 = createElem('li', '', 'Featherweight flour,');
    const item_4 = createElem('li', '',  'Sugarcane sugar,');
    const item_5 = createElem('li', '', 'Coconut oil,');
    const item_6 = createElem('li', '', 'Love');
    presentationList.append(item_1, item_2, item_3, item_4, item_5, item_6);
    
    return homePage;

}