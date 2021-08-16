const body = document.querySelector('body');

const p = document.createElement('p');
p.style.color = 'red';
p.textContent = 'Hey I\’m red!';
body.appendChild(p); 

const h3 = document.createElement('h3');
h3.style.color = 'blue';
h3.textContent = 'I\’m a blue h3!';
body.appendChild(h3); 

const div = document.createElement('div');
div.style.borderColor = 'black';
div.style.borderStyle = 'solid';
div.style.background = 'pink';
body.appendChild(div); 

const div_h1 = document.createElement('h1');
div_h1.textContent = 'I\’m in a div';
div.appendChild(div_h1); 
const div_p = document.createElement('p');
div_p.textContent = 'ME TOO!';
div.appendChild(div_p); 
