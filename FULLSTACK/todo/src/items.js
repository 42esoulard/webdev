import { compareDesc } from 'date-fns';

export {itemsHandler}

const item = (dueDateStr='', title='New Item', project='default',
             priority='medium', category='default') => {
    title,
    project,
    priority,
    category;

    let dueDate;
    if (dueDateStr)
        dueDate = new Date(dueDateStr);
    else {
        dueDate = new Date();
        dueDate.setDate(dueDate.getDate() + 1);
    }
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
    
    let projectsList = new Array('default');
    let categoriesList = ['animals', 'cat', 'default', 
                        'diet', 'family', 'groceries', 
                        'health', 'existencialCrisis', 
                        'house', 'mentalHealth', 
                        'movies', 'music', 'podcasts', 
                        'reading', 'social', 'sport',
                        'study', 'travel', 'work'];
    let prioritiesList = ['high', 'medium', 'low'];


    const setItemCategory = function(item, newCategory) {
        item.category = newCategory;
    }
    const setItemPriority = function(item, newPriority) {
        item.priority = newPriority;
    }

    const setItemProject = function(item, newProject) {
        item.project = newProject;
        if (!projectsList.includes(item.project))
            projectsList.push(item.project);
    }

    const setItemDate = function(item, date) {
        item.dueDate = date;
        sortItemsByDueDate();
    }

    const setItemTitle = function(item, name) {
        item.title = name;
    }

    const getAssetList = function(type) {
        switch (type) {
            case 'category':
                return categoriesList;
            case 'project':
                return projectsList;
            default:
                return prioritiesList;
        }

    }

    const createNewItem = function(parentType, parentName) {
        let newItem = item();
        newItem[parentType] = parentName;
        // newItem.project = project;
        // newItem.category = project.category;
        itemsList.push(newItem);
        // if (!categoriesList.includes(newItem.category))
        //     categoriesList.push(newItem.category);
        if (!projectsList.includes(newItem.project))
            projectsList.push(newItem.project);
        sortItemsByDueDate();
        return newItem;
    }

    const createNewProject = function(title) {
        projectsList.push(title);
    }

    const editProjectName = function(oldName, newName) {
        if (!projectsList.includes(oldName))
            return;
        projectsList[projectsList.indexOf(oldName)] = newName;
    }

    const setProject = function(item, newProject) {
        item.project = newProject;
    }

    const deleteItem = function(item) {
        if (itemsList.indexOf(item) >= 0)
            itemsList.splice(itemsList.indexOf(item), 1);
    }


    const deleteItemsByAsset = function(type, asset) {
        itemsList.forEach(item => {
            if (item[type] === asset)
                itemsList.splice(itemsList.indexOf(item), 1);
        })
        if (type === 'category' && categoriesList.includes(asset))
            categoriesList.splice(categoriesList.indexOf(asset), 1);
        else if (type === 'project' && projectsList.includes(asset))
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
        createNewProject,
        editProjectName,
        setProject,
        deleteItem,
        printAllItemsInfo,
        sortItemsByDueDate,
        getItems,
        getItemsInfos,
        deleteItemsByAsset,

        setItemCategory,
        setItemPriority,
        setItemProject,
        setItemTitle,
        setItemDate,

        getAssetList,
    }

})();
