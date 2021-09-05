// import { itemsHandler } from './items';
// import { projectsHandler } from './projects'

// export {coordinator}

// // does app work, data management and classification
// const coordinator = (function () {

//     // const createNewProject = function(title, category) {
//     //     projectsHandler.createNewProject(title, category);
//     // }

//     const createNewItem = function(dueDate, title, project='default') {
//         const newItem = itemsHandler.createNewItem(dueDate, title, project);
//         // projectsHandler.addItemToProject(newItem, project);
//         itemsHandler.sortItemsByDueDate();
//     }

//     const changeItemProject = function(item, newProject) {
//         // projectsHandler.removeItemFromProject(item, item.project);
//         // projectsHandler.addItemToProject(item, newProject);
//         itemsHandler.setProject(item, newProject);
//     }

//     const deleteProject = function(project) {
//         itemsHandler.deleteItemsByProject(project);
//     }

//     const deleteItem = function(item) {
//         // projectsHandler.removeItemFromProject(item, item.project);
//         itemsHandler.deleteItem(item);
//     }
    

//     const getAssetList = function(type) {
//         itemsHandler.getAssetList(type)
//     }

//     // const printProjectsInfo = function() {
//     //     projectsHandler.printProjectsInfo();
//     // }
//     const printAllItemsInfo = function() {
//         itemsHandler.printAllItemsInfo();
//     }

//     // const getProjectByIndex = function(n) {
//     //     return projectsHandler.getProjectByIndex(n);
//     // }

//     // const getProjects = function() {
//     //     return projectsHandler.getProjects();
//     // }

//     // const getProjectInfo = function(project) {
//     //     const infos = projectsHandler.getProjectInfo(project);
//     //     infos.items = itemsHandler.getItemsInfos(project.items);
//     //     return infos;
//     // }

//     const getItems = function() {
//         return itemsHandler.getItems();
//     }

    

//     return {
//         // createNewProject,
//         deleteProject,

//         createNewItem,
//         changeItemProject,
//         deleteItem,
        
//         getItems,


//         // getProjects,
//         // getProjectByIndex,

//         // getProjectInfo,

//         printAllItemsInfo,
//         // printProjectsInfo,
//     }
// })()

