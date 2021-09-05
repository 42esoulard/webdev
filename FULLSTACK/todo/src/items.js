import { compareDesc } from 'date-fns';

export {itemsHandler}

const item = (dueDateStr, title='New Item', project='',
             priority='medium', category='') => {
    title,
    project,
    priority,
    category;

    let dueDate = new Date(dueDateStr)
    let notes = '';

    let done = false;
    let checklist = new Array();
    let archived = false;
    const info = function() {
        return `Item DD[${dueDate}] title [${title}] in [${project}]`
    }

    const getInfos = function() {
        return {title, project, description, dueDate, priority, notes, category}
    }



    return {
        title,
        project,
        dueDate,
        priority,
        notes,
        category,
        done,
        info,
        getInfos,
    }
}



const itemsHandler = (function() {
    let itemsList = new Array();
    let categoriesList = new Array();
    let projectsList = new Array();
    let prioritiesList = ['high', 'medium', 'low'];


    const setItemCategory = function(item, newCategory) {
        item.category = newCategory;
        if (!categoriesList.includes(item.category))
            categoriesList.push(item.category);
    }

    const setItemProject = function(item, newProject) {
        item.project = newProject;
        if (!projectsList.includes(item.project))
            projectsList.push(item.project);
    }

    const getAssetList = function(type) {
        console.log('here');
        switch (type) {
            case 'category':
                return categoriesList;
            case 'project':
                return projectsList;
            default:
                return prioritiesList;
        }

    }

    const createNewItem = function(dueDate, title, project='') {
        let newItem = item(dueDate, title, project);
        // newItem.project = project;
        // newItem.category = project.category;
        itemsList.push(newItem);
        if (!categoriesList.includes(newItem.category))
            categoriesList.push(newItem.category);
        if (!projectsList.includes(newItem.project))
            projectsList.push(newItem.project);
        sortItemsByDueDate();
        return newItem;
    }

    const setProject = function(item, newProject) {
        item.project = newProject;
    }

    const deleteItem = function(item) {
        if (itemsList.indexOf(item) >= 0)
            itemsList.splice(itemList.indexOf(item), 1);
    }

    const deleteItemsByAsset = function(type, asset) {
        itemsList.forEach(item => {
            if (item[type] === asset)
                itemsList.splice(itemsList.indexOf(item), 1);
        })
        if (type === 'category')
            categoriesList.splice(categoriesList.indexOf(asset), 1);
        else if (type === 'project')
            projectsList.splice(projectsList.indexOf(asset), 1);
    }

    const printAllItemsInfo = function() {
        itemsList.forEach(item => console.log(item.info()));
    }

    const sortItemsByDueDate = function() {
        for (let i = 0; i < itemsList.length - 1; i++) {
            if (compareDesc(itemsList[i].dueDate, itemsList[i + 1].dueDate) < 0) {
                let tmp = itemsList[i];
                itemsList[i] = itemsList[i + 1];
                itemsList[i + 1] = tmp;
                i = -1;
            }
        }
    }

    const getItems = function() {
        return itemsList;
    }

    const getItemsInfos = function(items) {
        const infos = new Array();
        items.forEach(item => infos.push(item.getInfos()));
        return infos;
    }

    return {
        createNewItem,
        setProject,
        deleteItem,
        printAllItemsInfo,
        sortItemsByDueDate,
        getItems,
        getItemsInfos,
        deleteItemsByAsset,

        setItemCategory,
        setItemProject,
        getAssetList,
    }

})();
