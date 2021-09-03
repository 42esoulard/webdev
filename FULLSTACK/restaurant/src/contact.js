import {cockatooBig_img,
        createElem } from "./init";

export {loadContact};

function loadContact() {
    
    const pageContent = document.querySelector('div[class="pageContent"]');

    const contactPage = createElem('div', 'contactPage', '', '', 'tab');

    const streetAdress = createElem('div', 'streetAdress');
    contactPage.appendChild(streetAdress);

    const streetAdress_0 = createElem('div', 'presentationText', 'Come visit us at the Cockatoo Cookies shop!');
    const streetAdress_1 = createElem('p', 'streetAdress', 'Tallest Tree behind the Waterfall');
    const streetAdress_2 = createElem('p', 'streetAdress', 'Parc Monceau');
    const streetAdress_3 = createElem('p', 'streetAdress', '75008 PARIS');
    const streetAdress_4 = createElem('p', 'streetAdress', 'FRANCE');
    const cockatooBig = createElem('img', 'contactImage', '', 'Cuckoooo');
    cockatooBig.src = cockatooBig_img;
    streetAdress.append(streetAdress_0, 
                        streetAdress_1, 
                        streetAdress_2, 
                        streetAdress_3, 
                        streetAdress_4, 
                        cockatooBig);

    const messageForm = createElem('div', 'messageFormContainer');
    contactPage.appendChild(messageForm);

    const messageFormTitle = createElem('div', 'messageFormTitle', 'Sing us your love!');

    const messageFormName = createElem('input', 'formInput');
    messageFormName.placeholder = 'Your name'

    const messageFormEmail = createElem('input', 'formInput');
    messageFormEmail.placeholder = 'Your email adress'

    const messageFormMessage = createElem('textArea', 'formInput');
    messageFormMessage.classList.add('formMessage');
    messageFormMessage.rows = "5";
    messageFormMessage.cols = "30";
    messageFormMessage.placeholder = 'Your message';

    const messageFormSubmit = createElem('div', 'formButton', 'Send it our way');
    messageFormSubmit.addEventListener('click', function() {alert('Thanks for your message, we\'ll get back to you ASAP !')})

    messageForm.append( messageFormTitle, 
                        messageFormName, 
                        messageFormEmail, 
                        messageFormMessage, 
                        messageFormSubmit);

    return contactPage; 

}