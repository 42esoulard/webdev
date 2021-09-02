import { cockatooBig_img } from "./init";

export {loadContact};

function loadContact() {
    
    const pageContent = document.querySelector('div[class="pageContent"]');

    const contactPage = document.createElement('div');
    contactPage.classList.add('contactPage');
    contactPage.id = 'tab';

    const streetAdress = document.createElement('div');
    streetAdress.classList.add('streetAdress');
    contactPage.appendChild(streetAdress);

    const streetAdress_0 = document.createElement('div');
    streetAdress_0.textContent = 'Come visit us at the Cockatoo Cookies shop!';
    streetAdress_0.classList.add('presentationText');
    streetAdress.appendChild(streetAdress_0);
    const streetAdress_1 = document.createElement('p');
    streetAdress_1.textContent = 'Tallest Tree behind the Waterfall';
    streetAdress_1.classList.add('streetAdress');
    streetAdress.appendChild(streetAdress_1);
    const streetAdress_2 = document.createElement('p');
    streetAdress_2.textContent = 'Parc Monceau';
    streetAdress_2.classList.add('streetAdress');
    streetAdress.appendChild(streetAdress_2);
    const streetAdress_3 = document.createElement('p');
    streetAdress_3.textContent = '75008 PARIS';
    streetAdress_3.classList.add('streetAdress');
    streetAdress.appendChild(streetAdress_3);
    const streetAdress_4 = document.createElement('p');
    streetAdress_4.textContent = 'FRANCE';
    streetAdress_4.classList.add('streetAdress');
    streetAdress.appendChild(streetAdress_4);

    const cockatooBig = new Image();
    cockatooBig.src = cockatooBig_img;
    cockatooBig.classList.add('contactImage');
    streetAdress.appendChild(cockatooBig);


    const messageForm = document.createElement('div');
    messageForm.classList.add('messageFormContainer');
    contactPage.appendChild(messageForm);

    const messageFormTitle = document.createElement('div');
    messageFormTitle.classList.add('messageFormTitle');
    messageFormTitle.textContent = 'Sing us your love!'

    const messageFormName = document.createElement('input');
    messageFormName.classList.add('formInput');
    messageFormName.placeholder = 'Your name'

    const messageFormEmail = document.createElement('input');
    messageFormEmail.classList.add('formInput');
    messageFormEmail.placeholder = 'Your email adress'

    const messageFormMessage = document.createElement('textArea');
    messageFormMessage.classList.add('formInput');
    messageFormMessage.classList.add('formMessage');
    messageFormMessage.rows = "5";
    messageFormMessage.cols = "30";
    messageFormMessage.placeholder = 'Your message'

    const messageFormSubmit = document.createElement('div');
    messageFormSubmit.classList.add('formButton');
    messageFormSubmit.textContent = 'Send it our way';
    messageFormSubmit.addEventListener('click', function() {alert('Thanks for your message, we\'ll get back to you ASAP !')})

    messageForm.append(messageFormTitle, messageFormName, messageFormEmail, messageFormMessage, messageFormSubmit);

    return contactPage; 

}