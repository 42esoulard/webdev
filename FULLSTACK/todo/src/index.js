import './style.css'


const item = (project, title='New Item') => {
    title,
    project;
    let description;
    let dueDate;
    let priority = 'medium';
    let notes = '';
    let category;

    let checklist = new Array();
    let archived = false;
    const info = function() {
        return `Item title [${title}]`
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
    return {
        setTitle,
        setCategory,
        getTitle,
        getCategory,
        info,
    }
}


const dataArray = function() {
    let all = new Array();
    
    const addElem = function(elem) {
        if (elem)
            all.push(elem);
    }
    const removeElem = function(elem) {
        if (all.indexOf(elem) >= 0)
            all.splice(all.indexOf(elem), 1);
    }

    return {
        all,
        addElem,
        removeElem,
    }
}


const coordinator = (function () {
    const projectList = dataArray();
    const itemList = dataArray();

    const initProjectList = (function() {
        createNewProject('Default', 'default');
        createNewProject('Archive', 'default');
    })()

    const createNewProject = function(title, category) {
        projectList.addElem(project(title, category));
    }
    const createNewItem = function(title, project=projectList[0]) {
        let newItem = item(project, title);
        newItem.project = project;
        newItem.category = project.category;
        itemList.addElem(newItem);
    }
    const deleteItem = function(item) {
        itemList.removeElem(item);
    }
    const deleteProject = function(project) {
        projectList.removeElem(project);
        itemList.forEach(item => {
            if (item.project === project.getTitle())
                deleteItem(item)
        });
    }
    return {
        initProjectList,
        createNewProject,
        createNewItem,
        deleteItem,
        deleteProject,
    }
})()

const initApp = (function () {
    coordinator.createNewProject('Home repairs', 'DIY');
    coordinator.createNewItem('fix sink')

})()