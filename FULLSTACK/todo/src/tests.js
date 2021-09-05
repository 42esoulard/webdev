export {tests}
import {itemsHandler} from './index.js'

const tests = function() {
    console.log('INIT')
    // itemsHandler.printProjectsInfo();
    itemsHandler.printAllItemsInfo();

    console.log('new proj + new item')

    itemsHandler.createNewItem('December 17, 2021 03:24:00', 'fix sink', 'Home repairs')
    // itemsHandler.printProjectsInfo();
    itemsHandler.printAllItemsInfo();

    console.log('+2 fix sink in default and 1 in archived')
    itemsHandler.createNewItem('September 12, 2021 03:24:00', 'fix sink')
    itemsHandler.createNewItem('September 04, 2021 03:24:00', 'fix sink')
    itemsHandler.createNewItem('September 12, 2021 03:20:00', 'fix sink', 'Alabama bla');
    // itemsHandler.printProjectsInfo();
    itemsHandler.printAllItemsInfo();

    console.log('get ALL items by due date')
    itemsHandler.printAllItemsInfo();

    console.log('delete DIY (should delete fixsink')
    itemsHandler.deleteItemsByAsset('project', 'Home repairs');
    // itemsHandler.printProjectsInfo();
    itemsHandler.printAllItemsInfo();

    console.log('get ALL items by due date')
    itemsHandler.printAllItemsInfo();

    // console.log('bad proj index')
    // itemsHandler.getProjectByIndex(-1)
}