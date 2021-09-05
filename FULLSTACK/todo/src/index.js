import './style.css'
import { format } from 'date-fns';
// import { compareDesc } from 'date-fns';

import {itemsHandler} from './items'

import { tests } from './tests.js'
// import { projectsHandler } from './projects'
export {itemsHandler}

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
    
    const displayItem = function(item, parentNode=contentContainer) {

        const itemContainer = createNode('div', 'itemContainer', '', item.title);

        const itemCheck = createNode('input', 'checkbox', '', 'Not done', 'checkbox');
        itemCheck.type = 'checkbox';
        itemCheck.checked = item.done;
        if (itemCheck.checked)
            itemChecked.title = 'Done!'

        const itemTitle = createNode('div', 'itemTitle', item.title);
        const itemDueDate = createNode('div', 'itemDueDate', format(item.dueDate, 'MMM do yyyy'));
        const itemCategory = createNode('div', 'itemCategory', item.category, item.category);
        const itemPriority = createNode('div', 'itemPriority', item.priority, item.priority);


        itemContainer.append(itemCheck, itemTitle, itemDueDate, itemCategory, itemPriority);
        parentNode.appendChild(itemContainer);
    }

    const displayAsset = function(name) {
            const assetNode = createNode('div', 'assetContainer', name, '', name);
            if (!name)
                assetNode.id = "default";
            contentContainer.appendChild(assetNode);
            return assetNode;
    }

    const clearLists = function() {
        contentContainer.innerHTML = '';
    }

    return {
        displayAsset,
        displayItem,
        clearLists,
    }
})()


// delegates to both coordinator (app) and interfacer (UI)
const mediator = (function() {
    let sortingType;

    // const sortedByProjects = function(projectsList) {
    //     projectsList.forEach(project => {
    //         const infos = itemsHandler.getProjectInfo(project);
    //         const projectNode = interfacer.displayProject(infos.title, infos.category)
    //         infos.items.forEach(item => interfacer.displayItem(item, projectNode));
    //     })
    // }

    const sortedByDueDate = function(itemsList) {
        const assetNode = interfacer.displayAsset('');
        itemsList.forEach(item => {
            interfacer.displayItem(item, assetNode);
        })
    }

    //asset = category || project || priority
    const sortedByAsset = function(type, itemsList) {
        const assetList = itemsHandler.getAssetList(type);
        assetList.forEach(asset =>
        {
            const assetNode = interfacer.displayAsset(asset);
            itemsList.forEach(item => {
                if (item[type] === asset)
                    interfacer.displayItem(item, assetNode);
            })
        })
        
    }

    const sort = function(type) {
        if (type === sortingType)
            return;
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