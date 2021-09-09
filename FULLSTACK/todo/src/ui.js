import { format } from 'date-fns';

import {
    iconAddItem,
    iconAddProject,
    iconDel,
    iconPrioHigh,
    iconPrioMed,
    iconPrioLow,
    iconChecked,
    iconUnchecked,
} from './index'

import { mediator } from './mediator';

export { interfacer }


// does UI work
const interfacer = (function () {

    const contentContainer = document.querySelector('div[class=\'contentContainer\']');

    const createNode = function (type, style, text, title, id) {
        const newNode = document.createElement(type);
        if (style)
            newNode.classList.add(style);
        if (text)
            newNode.textContent = text;
        if (title)
            newNode.title = title;
        if (id)
            newNode.id = id;
        return newNode;
    }

    const switchCheckBox = function (domCheckElem) {
        if (domCheckElem.title === 'Not done') {
            domCheckElem.title = 'Done!';
            domCheckElem.src = iconChecked;
        }
        else {
            domCheckElem.title = 'Not done';
            domCheckElem.src = iconUnchecked;
        }
    }

    const initCategoriesDisplay = function (categoriesList) {
        const categoriesPicker = document.querySelector('div[class=\'categoriesPicker\']');

        categoriesList.forEach(category => {
            const cat = createNode('img', 'categoriesPickerIcon', '', category);
            cat.src = `./${category}.png`;

            categoriesPicker.appendChild(cat);
        })
    }

    const displayCategories = function (item, catIcon) {
        const categoriesPickerContainer = document.querySelector('div[class=\'categoriesPickerContainer\']');
        const categoriesPickerIcons = document.querySelectorAll('img[class=\'categoriesPickerIcon\']');
        catIcon.classList.add('selectedForPicker');

        const setCategoriesPickerEvent = function () {
            mediator.setItemCategory(item, this.title);
            categoriesPickerContainer.style.display = 'none';
            categoriesPickerIcons.forEach(cat => {
                cat.removeEventListener('click', setCategoriesPickerEvent)
                catIcon.classList.remove('selectedForPicker');
            })
        };

        categoriesPickerIcons.forEach(cat => {
            cat.addEventListener('click', setCategoriesPickerEvent)
        })

        categoriesPickerContainer.style.display = 'block';
        window.addEventListener('dblclick', function () {
            if (categoriesPickerContainer.style.display === 'block') {
                categoriesPickerContainer.style.display = 'none';
                categoriesPickerIcons.forEach(cat => {
                    cat.removeEventListener('click', setCategoriesPickerEvent);
                    catIcon.classList.remove('selectedForPicker');
                })
            }
        }, { once: true });
    }

    const initPrioritiesDisplay = function (prioritiesList) {
        const prioritiesPicker = document.querySelector('div[class=\'prioritiesPicker\']');

        prioritiesList.forEach(priority => {
            const prio = createNode('img', 'prioritiesPickerIcon', '', priority);
            prio.src = `./${priority}.png`;

            prioritiesPicker.appendChild(prio);
        })
    }

    const displayPriorities = function (item, prioIcon) {
        const prioritiesPickerContainer = document.querySelector('div[class=\'prioritiesPickerContainer\']');
        const prioritiesPickerIcons = document.querySelectorAll('img[class=\'prioritiesPickerIcon\']');
        prioIcon.classList.add('selectedForPicker');

        const setPrioritiesPickerEvent = function () {
            mediator.setItemPriority(item, this.title);
            prioritiesPickerContainer.style.display = 'none';
            prioritiesPickerIcons.forEach(prio => {
                prio.removeEventListener('click', setPrioritiesPickerEvent)
                prioIcon.classList.remove('selectedForPicker');
            })
        };

        prioritiesPickerIcons.forEach(prio => {
            prio.addEventListener('click', setPrioritiesPickerEvent)
        })

        prioritiesPickerContainer.style.display = 'block';
        window.addEventListener('dblclick', function () {
            if (prioritiesPickerContainer.style.display === 'block') {
                prioritiesPickerContainer.style.display = 'none';
                prioritiesPickerIcons.forEach(prio => {
                    prio.removeEventListener('click', setPrioritiesPickerEvent);
                    prioIcon.classList.remove('selectedForPicker');
                })
            }
        }, { once: true });
    }

    const displayItem = function (item, parentNode = contentContainer) {

        const itemContainer = createNode('div', 'itemContainer', '', item.title);

        const itemCheck = createNode('img', 'icon', '', 'Not done', 'check');
        if (item.done) {
            itemCheck.title = 'Done!'
            itemCheck.src = iconChecked;
        }
        else
            itemCheck.src = iconUnchecked;
        itemCheck.addEventListener('click', function () {
            mediator.checkItem(itemCheck, item);
        })

        const itemTitle = createNode('div', 'itemTitle', item.title, `In project: ${item.project}`);
        itemTitle.contentEditable = "true";
        itemTitle.addEventListener('focusout', function () { mediator.setItemTitle(item, this.textContent) });

        const itemDueDate = createNode('input', 'itemDueDate', format(item.dueDate, 'MM/d/yyyy H:mm'), 'Month/Day/Year');
        itemDueDate.type = 'date';
        itemDueDate.value = format(item.dueDate, 'yyyy-MM-dd');
        itemDueDate.required = "required"
        itemDueDate.addEventListener('change', function () { mediator.setItemDueDate(item, this.value) });

        const itemCategory = createNode('img', 'icon', '', `Category: ${item.category}`, 'category');
        itemCategory.src = `./${item.category}.png`;
        itemCategory.addEventListener('click', function () { mediator.displayCategories(item, itemCategory) });

        const itemPriority = createNode('img', 'icon', '', `Priority: ${item.priority}`, 'priority');
        if (item.priority === 'high')
            itemPriority.src = iconPrioHigh;
        else if (item.priority === 'medium')
            itemPriority.src = iconPrioMed;
        else
            itemPriority.src = iconPrioLow;
        itemPriority.addEventListener('click', function () { displayPriorities(item, itemPriority) });

        const itemDelete = createNode('img', 'icon', '', 'Delete item', 'delete');
        itemDelete.src = iconDel;
        itemDelete.addEventListener('click', function () { mediator.deleteItem(item) });
        itemContainer.append(itemCheck, itemTitle, itemDueDate, itemCategory, itemPriority, itemDelete);
        parentNode.insertBefore(itemContainer, parentNode.lastChild);
    }

    const displayAsset = function (type, name) {
        const assetNode = createNode('div', 'assetContainer', '', '', name);
        if (!name)
            assetNode.id = "default";
        contentContainer.appendChild(assetNode);

        const assetHeader = createNode('div', 'assetHeader', '', '', '');
        assetNode.appendChild(assetHeader);
        const assetTitle = createNode('div', 'assetTitle', name, '', name);
        if (type === 'project' && name === 'default')
            assetTitle.textContent = '';
        assetHeader.appendChild(assetTitle);
        if (type === 'category') {
            const assetCategory = createNode('img', 'icon', '', `Category: ${name}`, 'category');
            assetCategory.src = `./${name}.png`;
            assetHeader.appendChild(assetCategory);
        }
        if (assetNode.id !== "default" && type === "project") {
            const assetDelete = createNode('img', 'icon', '', 'Delete item', 'delete');
            assetDelete.src = iconDel;
            assetDelete.addEventListener('click', function () { mediator.deleteProject(name) });
            assetHeader.append(assetDelete);
            assetTitle.contentEditable = "true";
            assetTitle.addEventListener('focusout', function () { mediator.setProjectTitle(name, this.textContent) });
        }

        const assetAddItem = createNode('img', 'icon', '', 'Add an item to this list', 'addItem');
        assetAddItem.src = iconAddItem;
        assetNode.appendChild(assetAddItem);
        assetAddItem.addEventListener('click', function () {
            mediator.createNewItem(type, assetTitle.textContent);
        })

        return assetNode;
    }

    const displayAddProject = function () {
        const projectAdd = createNode('img', 'icon', '', 'Add a new project', 'addProject');
        projectAdd.src = iconAddProject;
        projectAdd.addEventListener('click', function () {
            mediator.createNewProject();
        })
        contentContainer.appendChild(projectAdd);
    }

    const clearLists = function () {
        contentContainer.innerHTML = '';
    }

    return {
        
        initCategoriesDisplay,
        initPrioritiesDisplay,

        displayAsset,
        displayItem,
        displayCategories,
        displayPriorities,
        switchCheckBox,
        displayAddProject,

        clearLists,
    }
})()
