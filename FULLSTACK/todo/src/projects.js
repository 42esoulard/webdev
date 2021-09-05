// export { projectsHandler }


// const project = (title='New Project', category='default') => {
//     title,
//     category;
//     let items = new Array();

//     const setTitle = function(newTitle) {
//         title = newTitle;
//     }
//     const getTitle = function() {
//         return title;
//     }
//     const setCategory = function(newCategory) {
//         category = newCategory;
//     }
//     const getCategory = function() {
//         return category;
//     }
//     const info = function() {
//         return `Project title [${title}] category[${category}]`
//     }
//     const printItemsInfo = function() {
//         console.log(this.items.length)
//         this.items.forEach(item => console.log(item.info()));
//     }

//     const isEqual = function(otherProject) {
//         if (title === otherProject.getTitle() && category === otherProject.getCategory())
//             return true;
//     }

//     const getInfo = function() {
//         return {title, category}
//     }

//     return {
//         setTitle,
//         setCategory,
//         getTitle,
//         getCategory,
//         getInfo,
//         items,
//         info,
//         printItemsInfo,
//         isEqual,
//     }
// }


// const projectsHandler = (function() {
//     let projectsList = new Array();

//     const createNewProject = function(title, category) {
//         projectsList.splice(projectsList.length - 1, 0, project(title, category));
//     }

//     const initProjectList = (function() {
//         projectsList.push(project('', 'default'));
//         projectsList.push(project('Archive', 'default'));
//     })();

//     const addItemToProject = function(item, newProject) {
//         newProject.items.push(item);
//     }

//     const removeItemFromProject = function (item, project) {
//         if (project && project.items.includes(item))
//             project.items.splice(project.items.indexOf(item), 1);
//     }

//     const deleteProject = function(project) {
//         if (project && projectsList.includes(project) && 
//             projectsList.indexOf(project) !== 0 && 
//             projectsList.indexOf(project) !== projectsList.length - 1) {
//                 projectsList.splice(projectsList.indexOf(project), 1);
//                 return true;
//             }
//         }

//     const printProjectsInfo = function() {
//         projectsList.forEach(project => {console.log(project.info()); project.printItemsInfo()});
//     }

//     const getProjectByIndex = function(n) {
//         return projectsList[n];
//     }

//     const getProjects = function() {
//         return projectsList;
//     }

//     const getProjectInfo = function (project) {
//         return project.getInfo();
//     }

//     return {
//         createNewProject,
//         addItemToProject,
//         removeItemFromProject,
//         deleteProject,

//         printProjectsInfo,
//         getProjectByIndex,
//         getProjects,
//         getProjectInfo,
//     }

// })();
