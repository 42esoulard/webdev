import {veganLogo_img} from './init'
import {fairtradeLogo_img} from './init'
import {ecoloLogo_img} from './init'

export {loadHome}

function loadHome() {

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
    
    return homePage;

}