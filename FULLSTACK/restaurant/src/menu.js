import {cookieBig_img} from './init.js'
export {loadMenu}

function loadMenu() {

    const pageContent = document.querySelector('div[class="pageContent"]');

    const menuPage = document.createElement('div');
    menuPage.classList.add('menuPage');
    menuPage.id = 'tab';

    const cookieImg = new Image();
    cookieImg.src = cookieBig_img;
    cookieImg.title = 'A huge Cookie';
    cookieImg.classList.add('menuCookie');
    
    const menuTitle = document.createElement('div');
    menuTitle.textContent = 'Our cookies';
    menuTitle.classList.add('menuTitle');
    menuTitle.appendChild(cookieImg);
    menuPage.appendChild(menuTitle);

    const menuList = document.createElement('ul');
    menuList.classList.add('menuList');
    menuPage.appendChild(menuList);

    const recipe_1 = document.createElement('li');
    recipe_1.textContent = 'Classic Chocolate Chiiip';
    const ingredients_1 = document.createElement('p');
    ingredients_1.textContent = 'The classic chocolate chip cookie, with 85% cocoa fairtrade chocolate.';
    
    const recipe_2 = document.createElement('li');
    recipe_2.textContent = 'Coconut Cockatoo';
    const ingredients_2 = document.createElement('p');
    ingredients_2.textContent = 'A coconut and chocolate twist with chewy coconut bites!';
    
    const recipe_3 = document.createElement('li');
    recipe_3.textContent = 'My Macadamiam';
    const ingredients_3 = document.createElement('p');
    ingredients_3.textContent = 'Macadamia nuts will drive you.. cuckoo!';
    
    const recipe_4 = document.createElement('li');
    recipe_4.textContent = 'Peanut Butter Sandwich';
    const ingredients_4 = document.createElement('p');
    ingredients_4.textContent = 'Two classic Chocolate Chip cookies giving the warmest hug to a teaspoon of peanut butter.';
    
    const recipe_5 = document.createElement('li');
    recipe_5.textContent = 'Hail Seitan';
    const ingredients_5 = document.createElement('p');
    ingredients_5.textContent = 'A charcoal and sweet seitan twist on the Classic. Its high protein content and raven black dough will ravish your soul...';
    
    const recipe_6 = document.createElement('li');
    recipe_6.textContent = 'Raspberry Bamboozle';
    const ingredients_6 = document.createElement('p');
    ingredients_6.textContent = 'With the Raspberry Bamboozle, you might either receive a Raspberry Cookie or a Cayenne pepper one. Only the first bite will tell!';
    menuList.append(recipe_1, ingredients_1, 
                    recipe_2, ingredients_2, 
                    recipe_3, ingredients_3, 
                    recipe_4, ingredients_4, 
                    recipe_5, ingredients_5, 
                    recipe_6, ingredients_6, );
    
    return menuPage; 
}

