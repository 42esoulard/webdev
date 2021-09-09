import { itemsHandler } from "./index"

export {exportToLocalStorage, importLocalStorage}

function updateLocalStorage() {
    let i = 0;
    
    itemsHandler.getItems().forEach(item => {
        for (let key in item.getInfos()) {
            localStorage.removeItem(`${i}${key}`)
        }
        ++i;
    });
    i = 0;
    itemsHandler.getAssetList('project').forEach(proj => {
            localStorage.removeItem(`${i}proj`)
        ++i;
    });
}

function exportToLocalStorage() {
    updateLocalStorage();

    let i = 0;
    itemsHandler.getItems().forEach(item => {
        for (let key in item.getInfos()) 
            localStorage.setItem(`${i}${key}`, `${item[key]}`)
        ++i;
    });
    localStorage.setItem('items_size', `${itemsHandler.getItems().length}`);
    i = 0;
    itemsHandler.getAssetList('project').forEach(proj => {
        localStorage.setItem(`${i}projectList`, `${proj}`);
        ++i;
    });
    localStorage.setItem('projects_size', `${itemsHandler.getAssetList('project').length}`);
    alert('Your lists have been saved!')
};

function importLocalStorage() {
    if (localStorage.getItem('items_size')) {
        itemsHandler.importItems();
    }
    if (localStorage.getItem('projects_size')) { 
        itemsHandler.importProjects();
    }
};