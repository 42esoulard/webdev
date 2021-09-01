// import _ from 'lodash';
import myName from './myName';
import printMe from './print.js';

function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');

    // element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.innerHTML = myName('Stella');

    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;

    element.appendChild(btn);
    return element;
}
  
  document.body.appendChild(component());