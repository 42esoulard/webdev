import cockatooLogo_img from './cockatoo_logo.png';
import cookieLogo_img from './cookies_logo.png';
import cookieBg_img from './cookies_img.png';
import cookiePattern_img from './cookies_pattern.jpg';

export {initHTML};


function initHTML() {
    const body = document.querySelector('body');
    body.style.backgroundImage = `url(${cookiePattern_img})`;

    const content = document.querySelector('div[id="content"]');

    /* BACKGROUND IMG */
    content.style.backgroundImage = `url(${cookieBg_img})`;

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
    /* -------------------- */

    /* ADDING MAIN CONTENT */
    const main = document.createElement('div');
    main.classList.add('main');
    content.appendChild(main);

    // const welcome = document.createElement('h1');
    // welcome.textContent = 'Welcome to Cockatoo Cookies!';
    // welcome.classList.add('welcome');
    // main.appendChild(welcome);

    const motto = document.createElement('div');
    motto.textContent = 'Our cookies will drive you cuckoo!';
    motto.classList.add('motto');
    main.appendChild(motto);

    const newAgeBS_1 = document.createElement('p');
    newAgeBS_1.textContent = 'You and I are dreamweavers of the planet. By awakening, we vibrate. Transcendence is the driver of rejuvenation. Awareness is a constant. Serenity is the growth of starfire, and of us. This life is nothing short of a condensing fount of mystical interconnectedness.';
    newAgeBS_1.classList.add('newAgeBS');
    // const newAgeBS_2 = document.createElement('p');
    // newAgeBS_2.textContent = 'We exist as sonar energy.';
    // newAgeBS_2.classList.add('newAgeBS');
    // const newAgeBS_3 = document.createElement('p');
    // newAgeBS_3.textContent = 'Presence requires exploration. To go along the myth is to become one with it. Nothing is impossible.';
    // newAgeBS_3.classList.add('newAgeBS');
    
    main.appendChild(newAgeBS_1);
    // main.appendChild(newAgeBS_2);
    // main.appendChild(newAgeBS_3);
    /* ----------------------- */

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