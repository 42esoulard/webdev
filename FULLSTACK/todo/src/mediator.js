import { itemsHandler } from "./index";
import { interfacer } from './ui';
import { parseISO } from 'date-fns';

export { mediator }

// delegates to both itemsHandler (app) and interfacer (UI)
const mediator = (function () {

    let sortingType;

    const initPickers = function () {
        interfacer.initCategoriesDisplay(itemsHandler.getAssetList('category'));
        interfacer.initPrioritiesDisplay(itemsHandler.getAssetList('priority'));
    }

    const displayCategories = function (item, catIcon) {
        interfacer.displayCategories(item, catIcon);
    }

    const setItemCategory = function (item, newCategory) {
        itemsHandler.setItemCategory(item, newCategory);
        sort(sortingType);
    }

    const setItemPriority = function (item, newPriority) {
        itemsHandler.setItemPriority(item, newPriority);
        sort(sortingType);
    }

    const setItemTitle = function (item, newTitle) {
        if (!newTitle) {
            newTitle = " ";
            itemsHandler.setItemTitle(item, newTitle);
            sort(sortingType);
            return;
        }
        itemsHandler.setItemTitle(item, newTitle);
    }

    const setItemDueDate = function (item, newDate) {
        if (!newDate)
            return;
        itemsHandler.setItemDate(item, parseISO(newDate));
        sort(sortingType);
    }

    const createNewItem = function (parentType, parentName) {
        itemsHandler.createNewItem(parentType, parentName);
        sort(sortingType);
    };

    const createNewProject = function () {
        itemsHandler.createNewProject('New project');
        sort(sortingType);
    }

    const setProjectTitle = function (oldName, newName) {
        if (newName === oldName)
            return ;
        if (newName === '')
            newName = '_';
        newName = itemsHandler.editProjectName(oldName, newName);
        const itemsList = itemsHandler.getItems();
        itemsList.forEach(item => {
            if (item.project === oldName)
                itemsHandler.setProject(item, newName);
        })
        sort(sortingType);
    }

    const deleteItem = function (item) {
        if (confirm(`Do you really want to delete '${item.title}'?`)) {
            itemsHandler.deleteItem(item);
            sort(sortingType);
        }
    };

    const deleteProject = function (name) {
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

    const sortedByDueDate = function (itemsList) {
        const assetNode = interfacer.displayAsset('');
        itemsList.forEach(item => {
            interfacer.displayItem(item, assetNode);
        })
    }

    //asset = category || project || priority
    const sortedByAsset = function (type, itemsList) {
        const assetList = itemsHandler.getAssetList(type);
        if (type === 'project')
            interfacer.displayAddProject();
        assetList.forEach(asset => {
            const assetNode = interfacer.displayAsset(type, asset);
            itemsList.forEach(item => {
                if (item[type] === asset)
                    interfacer.displayItem(item, assetNode);
            })
        })
    }

    const sort = function (type) {
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

        initPickers,
        displayCategories,

        createNewProject,
        setProjectTitle,
        deleteProject,

        createNewItem,
        setItemDueDate,
        setItemTitle,
        setItemCategory,
        setItemPriority,
        checkItem,
        deleteItem,
    }
})()