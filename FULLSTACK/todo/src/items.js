import { compareDesc } from 'date-fns';

export {itemsHandler}

const item = (dueDateStr='', title='New Item', project='default',
             priority='medium', category='default', done=false) => {
    title,
    project,
    priority,
    category,
    done;

    let dueDate;
    if (dueDateStr)
        dueDate = new Date(dueDateStr);
    else {
        dueDate = new Date();
        dueDate.setDate(dueDate.getDate() + 1);
    }

    const getInfos = function() {
        return {'title':title, 'project':project, 'dueDate':dueDate, 
            'priority':priority, 'category':category, 'done':done}
    }

    return {

        title,
        project,
        dueDate,
        priority,
        category,
        done,
   
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
        itemsList.push(newItem);
        if (!projectsList.includes(newItem.project))
            projectsList.push(newItem.project);
        sortItemsByDueDate();
        return newItem;
    }

    const importItems = function() {
        for (let i = 0; i < localStorage.getItem('items_size'); i++) {
       
            let newItem = item(localStorage.getItem(`${i}dueDate`), localStorage.getItem(`${i}title`),
                                   localStorage.getItem(`${i}project`), localStorage.getItem(`${i}priority`), 
                                   localStorage.getItem(`${i}category`), localStorage.getItem(`${i}done`));
            
            
            newItem.done = ( newItem.done === 'false'? false : true);
            itemsList.push(newItem);
            
            if (!projectsList.includes(newItem.project))
                projectsList.push(newItem.project);
        }
        sortItemsByDueDate();
    }

    const importProjects = function() {
        for (let i = 0; i < localStorage.getItem('projects_size'); i++) {

            if (!projectsList.includes(localStorage.getItem(`${i}projectList`)))
                projectsList.push(localStorage.getItem(`${i}projectList`));
        }
    }

    const createNewProject = function(title) {
        let idx = 0;
        let editedTitle = title;
        while (projectsList.includes(editedTitle))
            editedTitle = `${title} #${idx++}`;
        projectsList.push(editedTitle);
    }

    const editProjectName = function(oldName, newName) {
        if (projectsList.includes(oldName))
            projectsList.slice(projectsList.indexOf(oldName), 1);
        let editedNewName = newName;
        let idx = 0;
        while (projectsList.includes(editedNewName))
            editedNewName = `${newName} #${idx++}`;
        projectsList[projectsList.indexOf(oldName)] = editedNewName;
        return editedNewName;
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
        setItemCategory,
        setItemPriority,
        setItemProject,
        setItemTitle,
        setItemDate,
        deleteItem,
        deleteItemsByAsset,

        sortItemsByDueDate,
        getItems,
        getItemsInfos,
        printAllItemsInfo,

        createNewProject,
        editProjectName,
        setProject,

        getAssetList,
        
        importItems,
        importProjects,
    }
})();
