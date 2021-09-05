import './style.css'
import { compareDesc } from 'date-fns';

const item = (dueDateStr, project, title='New Item') => {
    title,
    project;
    let dueDate = new Date(dueDateStr)
    let description;
    let priority = 'medium';
    let notes = '';
    let category;

    let checklist = new Array();
    let archived = false;
    const info = function() {
        return `Item DD[${dueDate}] title [${title}] in [${project.info()}]`
    }
    return {
        title,
        project,
        description,
        dueDate,
        priority,
        notes,
        category,
        info,
    }
}

const project = (title='New Project', category='default') => {
    title,
    category;
    let items = new Array();

    const setTitle = function(newTitle) {
        title = newTitle;
    }
    const getTitle = function() {
        return title;
    }
    const setCategory = function(newCategory) {
        category = newCategory;
    }
    const getCategory = function() {
        return category;
    }
    const info = function() {
        return `Project title [${title}] category[${category}]`
    }
    const printItemsInfo = function() {
        console.log(this.items.length)
        this.items.forEach(item => console.log(item.info()));
    }

    const isEqual = function(otherProject) {
        if (title === otherProject.getTitle() && category === otherProject.getCategory())
            return true;
    }
    return {
        setTitle,
        setCategory,
        getTitle,
        getCategory,
        items,
        info,
        printItemsInfo,
        isEqual,
    }
}

const itemsHandler = (function() {
    let itemsList = new Array();

    const createNewItem = function(dueDate, title, project=(projectList[0])) {
        let newItem = item(dueDate, project, title);
        newItem.project = project;
        newItem.category = project.category;
        itemsList.push(newItem);
        sortItemsByDueDate(itemsList);
        return newItem;
    }

    const setProject = function(item, newProject) {
        item.project = newProject;
    }

    const deleteItem = function(item) {
        if (itemsList.indexOf(item) >= 0)
            itemsList.splice(itemList.indexOf(item), 1);
    }

    const deleteItemsByProject = function(project) {
        itemsList.forEach(item => {
            if (item.project.isEqual(project))
                itemsList.splice(itemsList.indexOf(item), 1);
        })
    }

    const printAllItemsInfo = function() {
        itemsList.forEach(item => console.log(item.info()));
    }

    const sortItemsByDueDate = function(items) {
        for (let i = 0; i < items.length - 1; i++) {
            if (compareDesc(items[i].dueDate, items[i + 1].dueDate) < 0) {
                let tmp = items[i];
                items[i] = items[i + 1];
                items[i + 1] = tmp;
                i = -1;
            }
        }
    }

    return {
        createNewItem,
        setProject,
        deleteItem,
        deleteItemsByProject,
        printAllItemsInfo,
        sortItemsByDueDate,
    }

})();



const projectsHandler = (function() {
    let projectsList = new Array();

    const createNewProject = function(title, category) {
        projectsList.splice(projectsList.length - 1, 0, project(title, category));
    }

    const initProjectList = (function() {
        projectsList.push(project('Default', 'default'));
        projectsList.push(project('Archive', 'default'));
    })();

    const addItemToProject = function(item, newProject) {
        newProject.items.push(item);
    }

    const removeItemFromProject = function (item, project) {
        if (project && project.items.includes(item))
            project.items.splice(project.items.indexOf(item), 1);
    }

    const deleteProject = function(project) {
        if (project && projectsList.includes(project) && 
            projectsList.indexOf(project) !== 0 && 
            projectsList.indexOf(project) !== projectsList.length - 1)
                projectsList.splice(projectsList.indexOf(project), 1);
    }

    const printProjectsInfo = function() {
        projectsList.forEach(project => {console.log(project.info()); project.printItemsInfo()});
    }

    const getProjectByIndex = function(n) {
        return projectsList[n];
    }

    return {
        createNewProject,
        addItemToProject,
        removeItemFromProject,
        deleteProject,
        printProjectsInfo,
        getProjectByIndex,
    }

})();

const coordinator = (function () {

    const createNewProject = function(title, category) {
        projectsHandler.createNewProject(title, category);
    }

    const createNewItem = function(dueDate, title, project=getProjectByIndex(0)) {
        const newItem = itemsHandler.createNewItem(dueDate, title, project);
        projectsHandler.addItemToProject(newItem, project);
        itemsHandler.sortItemsByDueDate(project.items);

    }

    const changeItemProject = function(item, newProject) {
        projectsHandler.removeItemFromProject(item, item.project);
        projectsHandler.addItemToProject(item, newProject);
        itemsHandler.setProject(item, newProject);
    }

    const deleteProject = function(project) {
        itemsHandler.deleteItemsByProject(project);
        projectsHandler.deleteProject(project);
        
    }

    const deleteItem = function(item) {
        projectsHandler.removeItemFromProject(item, item.project);
        itemsHandler.deleteItem(item);
    }
    

    const printProjectsInfo = function() {
        projectsHandler.printProjectsInfo();
    }
    const printAllItemsInfo = function() {
        itemsHandler.printAllItemsInfo();
    }

    const getProjectByIndex = function(n) {
        return projectsHandler.getProjectByIndex(n);
    }

    

    return {
        createNewProject,
        deleteProject,

        createNewItem,
        changeItemProject,
        deleteItem,
        
        getProjectByIndex,

        printAllItemsInfo,
        printProjectsInfo,
    }
})()





const tests = function() {
    console.log('INIT')
    coordinator.printProjectsInfo();
    // coordinator.printAllItemsInfo();

    console.log('new proj + new item')
    coordinator.createNewProject('Home repairs', 'DIY');
    coordinator.createNewItem('December 17, 2021 03:24:00', 'fix sink', coordinator.getProjectByIndex(2))
    coordinator.printProjectsInfo();
    // coordinator.printAllItemsInfo();

    console.log('+2 fix sink in default and 1 in archived')
    coordinator.createNewItem('September 12, 2021 03:24:00', 'fix sink')
    coordinator.createNewItem('September 04, 2021 03:24:00', 'fix sink')
    coordinator.createNewItem('September 12, 2021 03:20:00', 'fix sink', coordinator.getProjectByIndex(1));
    coordinator.printProjectsInfo();
    // coordinator.printAllItemsInfo();

    console.log('get ALL items by due date')
    coordinator.printAllItemsInfo();

    console.log('delete DIY (should delete fixsink')
    coordinator.deleteProject(coordinator.getProjectByIndex(2));
    coordinator.printProjectsInfo();
    // coordinator.printAllItemsInfo();

    console.log('get ALL items by due date')
    coordinator.printAllItemsInfo();

    console.log('bad proj index')
    coordinator.getProjectByIndex(-1)
}

const initApp = (function () {
    
    tests();

})()