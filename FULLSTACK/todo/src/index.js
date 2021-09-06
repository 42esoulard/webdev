import './style.css'
import { format, parseISO } from 'date-fns';

import iconEdit from './edit.png';
import iconAddItem from './addItem.png'
import iconAddProject from './addProject.png'

import iconDel from './delete.png';
import iconPrioHigh from './high.png';
import iconPrioMed from './medium.png';
import iconPrioLow from './low.png';

// import iconCatCat from './cat.png';
// import iconCatAnimals from './animals.png';
// import iconCatExistencialCrisis from './death.png';
// import iconCatDefault from './default.png';
// import iconCatDiet from './diet.png';
// import iconCatFamily from './family.png';
// import iconCatGroceries from './groceries.png';
// import iconCatHealth from './health.png';
// import iconCatHouse from './house.png';
// import iconCatMentalHealth from './mentalHealth.png';
// import iconCatMovies from './movies.png';
// import iconCatMusic from './music.png';
// import iconCatPodcasts from './podcasts.png';
// import iconCatReading from './reading.png';
// import iconCatSocial from './social.png';
// import iconCatSport from './sport.png';
// import iconCatStudy from './study.png';
// import iconCatTravel from './travel.png';
// import iconCatWork from './work.png';

import iconChecked from './checked.png';
import iconUnchecked from './unchecked.png';
// import { compareDesc } from 'date-fns';

import {itemsHandler} from './items'

import { tests } from './tests.js'
// import { projectsHandler } from './projects'
export {itemsHandler}


// const categoryIcons = {
//     'Animals': iconCatAnimals,
//     'Cat':iconCatCat, 
//     'Existencial Crisis':iconCatExistencialCrisis, 
//     'Default':, 
//     'Diet', 
//     'Family', 
//     'Groceries',             
//     'Health', 
//     'House', 
//     'Mental health', 
//     'Movies', 
//     'Music', 
//     'Podcasts', 
//     'Reading', 
//     'Social', 
//     'Sport',
//     'Study', 
//     'Travel', 
//     'Work'
// }

const DEFAULT_SORT_TYPE = 'dueDate'


// does UI work
const interfacer = (function() {

    const contentContainer = document.querySelector('div[class=\'contentContainer\']');
    
    const createNode = function(type, style, text, title, id) {
        const newNode = document.createElement(type);
        if (style)
            newNode.classList.add(style);
        if (text)
            newNode.textContent = text;
        if (title)
            newNode.title = title;
        if (id)
            newNode.id = id;
        // if (link)
        //     newNode.href = link;
        return newNode;
    }
    
    const switchCheckBox = function(domCheckElem) {
        if (domCheckElem.title === 'Not done') {
            domCheckElem.title = 'Done!';
            domCheckElem.src = iconChecked;
        }
        else {
            domCheckElem.title = 'Not done';
            domCheckElem.src = iconUnchecked;
        }
    }

    const displayCategories = function(item, categoriesList) {
        const categoriesPickerContainer = document.querySelector('div[class=\'categoriesPickerContainer\']');
        const categoriesPicker = document.querySelector('div[class=\'categoriesPicker\']');
    
        categoriesList.forEach(category => {
            const cat = createNode('img', 'icon', '', category);
            cat.src = `../src/${category}.png`;
            cat.addEventListener('click', function() {
                mediator.setItemCategory(item, this.title);
                categoriesPickerContainer.style.display = 'none';
            });
            categoriesPicker.appendChild(cat);
        })
        categoriesPickerContainer.style.display = 'block';
        window.addEventListener('dblclick', function() {
            if (categoriesPickerContainer.style.display = 'block')
                categoriesPickerContainer.style.display = 'none';
        }, {once : true});
    }

    const displayPriorities = function(item) {
        const prioritiesPickerContainer = document.querySelector('div[class=\'prioritiesPickerContainer\']');
        const prioritiesPicker = document.querySelector('div[class=\'prioritiesPicker\']');
        const prioritiesList = ['high', 'medium', 'low']

        prioritiesList.forEach(priority => {
            const prio = createNode('img', 'icon', '', priority);
            prio.src = `../src/${priority}.png`;
            prio.addEventListener('click', function() {
                mediator.setItemPriority(item, this.title);
                prioritiesPickerContainer.style.display = 'none';
            });
            prioritiesPicker.appendChild(prio);
        })
        prioritiesPickerContainer.style.display = 'block';
        window.addEventListener('dblclick', function() {
            if (prioritiesPickerContainer.style.display = 'block')
                prioritiesPickerContainer.style.display = 'none';
        }, {once : true});
    }

    const displayItem = function(item, parentNode=contentContainer) {

        const itemContainer = createNode('div', 'itemContainer', '', item.title);

        const itemCheck = createNode('img', 'icon', '', 'Not done', 'check');
        if (item.done) {
            itemCheck.title = 'Done!'
            itemCheck.src = iconChecked;
        }
        else
            itemCheck.src = iconUnchecked;
        itemCheck.addEventListener('click', function() {
            mediator.checkItem(itemCheck, item);
        })

        const itemTitle = createNode('div', 'itemTitle', item.title);
        itemTitle.contentEditable="true";
        itemTitle.addEventListener('input', function() { mediator.setItemTitle(item, this.textContent)});


        const itemDueDate = createNode('input', 'itemDueDate', format(item.dueDate, 'MM/d/yyyy H:mm'), 'Month/Day/Year');
        itemDueDate.type = 'date';
        itemDueDate.value = format(item.dueDate, 'yyyy-MM-dd');
        itemDueDate.required="required"
        itemDueDate.addEventListener('change', function() { mediator.setItemDueDate(item, this.value)});
        

        const itemCategory = createNode('img', 'icon', '', `Category: ${item.category}`, 'category');
        itemCategory.src = `../src/${item.category}.png`;
        itemCategory.addEventListener('click', function() { mediator.displayCategories(item)});

        
        const itemPriority = createNode('img', 'icon', '', `Priority: ${item.priority}`, 'priority');
        if (item.priority === 'high')
            itemPriority.src = iconPrioHigh;
        else if (item.priority === 'medium')
            itemPriority.src = iconPrioMed;
        else
            itemPriority.src = iconPrioLow;
        itemPriority.addEventListener('click', function() { displayPriorities(item)});

        // const itemEdit = createNode ('img', 'icon', '', 'Edit item', 'edit');
        // itemEdit.src = iconEdit;
        // itemEdit.addEventListener('click', function() {mediator.editItem(item)});
        const itemDelete = createNode ('img', 'icon', '', 'Delete item', 'delete');
        itemDelete.src = iconDel;
        itemDelete.addEventListener('click', function() {mediator.deleteItem(item)});
        itemContainer.append(itemCheck, itemTitle, itemDueDate, itemCategory, itemPriority, itemDelete);
        parentNode.insertBefore(itemContainer, parentNode.lastChild);
    }

    const displayAsset = function(type, name) {
        console.log(`ASSET [${type}][${name}]`)
        const assetNode = createNode('div', 'assetContainer', '', '', name);
        if (!name)
            assetNode.id = "default";
        contentContainer.appendChild(assetNode);

        const assetTitle = createNode('div', 'assetTitle', name, '', name);
        if (type === 'project' && name === 'default')
            assetTitle.textContent = '';
        assetNode.appendChild(assetTitle);
        if (type === 'category') {
            const assetCategory = createNode ('img', 'icon', '', `Category: ${name}`, 'category');
            assetCategory.src = `../src/${name}.png`;
            assetTitle.appendChild(assetCategory);
        }
        if (assetNode.id !== "default" && type === "project") {
            const assetDelete = createNode ('img', 'icon', '', 'Delete item', 'delete');
            assetDelete.src = iconDel;
            assetDelete.addEventListener('click', function() {mediator.deleteProject(name)});
            assetTitle.append(assetDelete);
            assetTitle.contentEditable="true";
            assetTitle.addEventListener('input', function() { mediator.setProjectTitle(name, this.textContent)});

        }
        const assetAddItem = createNode ('img', 'icon', '', 'Add an item to this list', 'addItem');
        assetAddItem.src = iconAddItem;
        assetNode.appendChild(assetAddItem);
        assetAddItem.addEventListener('click', function() {
            mediator.createNewItem(type, name);
        })
        return assetNode;
    }

    const displayAddProject = function() {
        const projectAdd = createNode('img', 'icon', '', 'Add a new project', 'addProject');
        projectAdd.src = iconAddProject;
        projectAdd.addEventListener('click', function() {
            mediator.createNewProject();
        })
        contentContainer.appendChild(projectAdd);
    }

    const clearLists = function() {
        contentContainer.innerHTML = '';
    }

    return {
        displayAsset,
        displayItem,
        displayCategories,
        displayPriorities,
        displayAddProject,
        clearLists,
        switchCheckBox,
    }
})()

let sortingType;

// delegates to both coordinator (app) and interfacer (UI)
const mediator = (function() {

    const displayCategories = function(item) {
        interfacer.displayCategories(item, itemsHandler.getAssetList('category'));
    }

    const setItemCategory = function(item, newCategory) {
        itemsHandler.setItemCategory(item, newCategory);
        sort(sortingType);
    }

    const setItemPriority = function(item, newPriority) {
        itemsHandler.setItemPriority(item, newPriority);
        sort(sortingType);
    }

    const setItemTitle = function(item, newTitle) {
        if (!newTitle) {
            newTitle = " ";
            itemsHandler.setItemTitle(item, newTitle);
            sort(sortingType);
            return;
        }
        itemsHandler.setItemTitle(item, newTitle);
    }


    const setItemDueDate = function(item, newDate) {
        if (!newDate)
            return;
        itemsHandler.setItemDate(item, parseISO(newDate));
        sort(sortingType);
    }

    const createNewItem = function(parentType, parentName) {
        itemsHandler.createNewItem(parentType, parentName);
        sort(sortingType);
    };

    const createNewProject = function() {
        itemsHandler.createNewProject('New project');
        sort(sortingType);
    }

    const setProjectTitle = function(oldName, newName) {
        itemsHandler.editProjectName(oldName, newName);
        const itemsList = itemsHandler.getItems();
        itemsList.forEach(item => {
            if (item.project === oldName)
                itemsHandler.setProject(item, newName);
        })
    }

    const deleteItem = function(item) {
        if (confirm(`Do you really want to delete '${item.title}'?`)) {
            itemsHandler.deleteItem(item);
            sort(sortingType);
        }
    };

    const deleteProject = function(name) {
        if (confirm(`Do you really want to delete '${name}' and all of its content?`)) {
            itemsHandler.deleteItemsByAsset('project', name);
            sort(sortingType);
        }
    };

    const checkItem = function (domCheckElem, item) {
        if (item.done) 
            item.done = false;
        else    
            item.done = true;
        interfacer.switchCheckBox(domCheckElem);
    }

    const sortedByDueDate = function(itemsList) {
        const assetNode = interfacer.displayAsset('');
        itemsList.forEach(item => {
            interfacer.displayItem(item, assetNode);
        })
    }

    //asset = category || project || priority
    const sortedByAsset = function(type, itemsList) {
        const assetList = itemsHandler.getAssetList(type);
        if (type === 'project')
            interfacer.displayAddProject();
        assetList.forEach(asset =>
        {
            const assetNode = interfacer.displayAsset(type, asset);
            itemsList.forEach(item => {
                if (item[type] === asset)
                    interfacer.displayItem(item, assetNode);
            })
        })
        
    }

    const sort = function(type) {
        sortingType = type;
        interfacer.clearLists();
        const itemsList = itemsHandler.getItems();
        if (type === 'project' || type === 'category' || type === 'priority')
            sortedByAsset(type, itemsList);
        else if (type === 'dueDate')
            sortedByDueDate(itemsList);
        else
            sort('dueDate');
    }  
    
    return {
        sort,
        checkItem,
        createNewItem,
        createNewProject,
        setProjectTitle,
        deleteProject,
        setItemDueDate,
        setItemTitle,
        displayCategories,
        setItemCategory,
        setItemPriority,
        deleteItem,
    }
})()

const setNavEvents = (function() {
    const navButtons = document.querySelectorAll('li[class="navButton"]');
    navButtons.forEach(button => button.addEventListener('click', function() {
        mediator.sort(button.id);
    }))
})()


const initApp = (function () {
    
    tests();
    mediator.sort(DEFAULT_SORT_TYPE);


})()