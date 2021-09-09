import { parseISO } from 'date-fns';
export {demo}

const demo = function() {
    localStorage.setItem(`0dueDate`, parseISO('2021-10-31'));
    localStorage.setItem(`0title`, 'Spooky date');
    localStorage.setItem(`0project`, 'Spooky stuff');
    localStorage.setItem(`0priority`, 'medium');
    localStorage.setItem(`0category`, 'social');
    localStorage.setItem(`0done`, 'false');

    localStorage.setItem(`1dueDate`, parseISO('2021-10-30'));
    localStorage.setItem(`1title`, 'Buy all the candy');
    localStorage.setItem(`1project`, 'Spooky stuff');
    localStorage.setItem(`1priority`, 'high');
    localStorage.setItem(`1category`, 'groceries');
    localStorage.setItem(`1done`, 'false');

    localStorage.setItem(`2dueDate`, parseISO('2021-11-01'));
    localStorage.setItem(`2title`, 'Summon the dark lord');
    localStorage.setItem(`2project`, 'Spooky stuff');
    localStorage.setItem(`2priority`, 'high');
    localStorage.setItem(`2category`, 'mentalHealth');
    localStorage.setItem(`2done`, 'false');

    localStorage.setItem(`3dueDate`, parseISO('2021-09-25'));
    localStorage.setItem(`3title`, 'Buy PREMIUM kibbles');
    localStorage.setItem(`3project`, 'Feline supremacy');
    localStorage.setItem(`3priority`, 'high');
    localStorage.setItem(`3category`, 'cat');
    localStorage.setItem(`3done`, 'false');

    localStorage.setItem(`4dueDate`, parseISO('2021-09-26'));
    localStorage.setItem(`4title`, 'PET THE CAT');
    localStorage.setItem(`4project`, 'Feline supremacy');
    localStorage.setItem(`4priority`, 'high');
    localStorage.setItem(`4category`, 'cat');
    localStorage.setItem(`4done`, 'true');

    localStorage.setItem(`5dueDate`, parseISO('2021-09-25'));
    localStorage.setItem(`5title`, 'Go to Bali');
    localStorage.setItem(`5project`, 'Insta influencer dumpster hell');
    localStorage.setItem(`5priority`, 'low');
    localStorage.setItem(`5category`, 'travel');
    localStorage.setItem(`5done`, 'false');

    localStorage.setItem(`6dueDate`, parseISO('2021-09-25'));
    localStorage.setItem(`6title`, 'Study for 12hours a day for ten days straight');
    localStorage.setItem(`6project`, '42');
    localStorage.setItem(`6priority`, 'high');
    localStorage.setItem(`6category`, 'study');
    localStorage.setItem(`6done`, 'true');

    localStorage.setItem(`7dueDate`, parseISO('2021-09-28'));
    localStorage.setItem(`7title`, 'Cry in the shower');
    localStorage.setItem(`7project`, '42');
    localStorage.setItem(`7priority`, 'low');
    localStorage.setItem(`7category`, 'existencialCrisis');
    localStorage.setItem(`7done`, 'true');

    localStorage.setItem('items_size', 8);
}