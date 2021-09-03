import {cookieBig_img,
        createElem} from './init.js'
export {loadMenu}

function loadMenu() {

    const pageContent = document.querySelector('div[class="pageContent"]');

    const menuPage = createElem('div', 'menuPage', '', '', 'tab');

    const cookieImg = createElem('img', 'menuCookie', '', 'A huge Cookie');
    cookieImg.src = cookieBig_img;
    
    const menuTitle = createElem('div', 'menuTitle', 'Our cookies');
    menuTitle.appendChild(cookieImg);
    menuPage.appendChild(menuTitle);

    const menuList = createElem('ul', 'menuList');
    menuPage.appendChild(menuList);

    const recipe_1 = createElem('li', '', 'Classic Chocolate Chiiip');
    const ingredients_1 = createElem('p', '', 'The classic chocolate chip cookie, with 85% cocoa fairtrade chocolate.');
    
    const recipe_2 = createElem('li', '', 'Coconut Cockatoo');
    const ingredients_2 = createElem('p', '', 'A coconut and chocolate twist with chewy coconut bites!');
    
    const recipe_3 = createElem('li', '', 'My Macadamiam');
    const ingredients_3 = createElem('p', '', 'Macadamia nuts will drive you.. cuckoo!');

    const recipe_4 = createElem('li', '', 'Peanut Butter Sandwich');
    const ingredients_4 = createElem('p', '', 'Two classic Chocolate Chip cookies giving the warmest hug to a teaspoon of peanut butter.');

    const recipe_5 = createElem('li', '', 'Hail Seitan');
    const ingredients_5 = createElem('p', '', 'A charcoal and sweet seitan twist on the Classic. Its high protein content and raven black dough will ravish your soul.');

    const recipe_6 = createElem('li', '', 'Raspberry Bamboozle');
    const ingredients_6 = createElem('p', '', 'With the Raspberry Bamboozle, you might either receive a Raspberry Cookie or a Cayenne pepper one. Only the first bite will tell!');
    
    menuList.append(recipe_1, ingredients_1, 
                    recipe_2, ingredients_2, 
                    recipe_3, ingredients_3, 
                    recipe_4, ingredients_4, 
                    recipe_5, ingredients_5, 
                    recipe_6, ingredients_6, );
    
    return menuPage; 
}

