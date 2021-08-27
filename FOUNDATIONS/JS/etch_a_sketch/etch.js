
let DEFAULT_BG_COLOR = '#829b76'; //white
let DEFAULT_COLOR = '#000000'; //black
let DEFAULT_GRID = 16; // default number of lines/columns
let GRID_SIDE = 360; // grid is a square, size of its side in px 

let bg_color = DEFAULT_BG_COLOR;
let color = DEFAULT_COLOR;
let grid_rows = 0;
let grid_size = grid_rows * grid_rows;
let new_grid_rows = DEFAULT_GRID;
let new_grid_size = DEFAULT_GRID * DEFAULT_GRID;



/* ------ GRID BUILDING/REBUILDING ------ */

const grid_container = document.querySelector('.grid_container');
let pixels = grid_container.querySelectorAll('div');

function build_grid() {
    let repeat = 'repeat(' + new_grid_rows.toString() + ', ' + (GRID_SIDE / new_grid_rows).toString() + 'px)'; 
    grid_container.style.gridTemplateRows = repeat;
    grid_container.style.gridTemplateColumns = repeat;
    if (new_grid_size < grid_size) {
        while (grid_size-- > new_grid_size)
            grid_container.removeChild(grid_container.querySelector('div'));
    }
    else {
        while (grid_size++ < new_grid_size)
            grid_container.appendChild(document.createElement('div'));
    }
    grid_rows = new_grid_rows;
    grid_size = new_grid_size;
    
    pixels = grid_container.querySelectorAll('div');
    pixels.forEach(pix => pix.addEventListener('mouseover', draw));
    pixels.forEach(pix => pix.style.background = bg_color);
}

build_grid();

function clear() {
    
    new_grid_rows = prompt('How many rows should the new grid have?');
    if (new_grid_rows < 1 || new_grid_rows > 100) {
        alert('Size should be between 1 and 100: reinitializing grid.');
        new_grid_rows = DEFAULT_GRID;
        new_grid_size = DEFAULT_GRID * DEFAULT_GRID;

    }
    new_grid_size = new_grid_rows * new_grid_rows;
    if (grid_size === new_grid_size) {
        pixels.forEach(pix => pix.style.background = bg_color);
        return;
    }

    build_grid();
}

const clear_button = document.querySelector('#clear');
clear_button.addEventListener('click', clear);



/* ------ COLOR HANDLING ------ */

function darken(rgb) {
    let hex = rgb.toString();
    if (hex.match('rgb') == null)
        return rgb;

    let reg = /\d+/g;
    let m;
    let result = "#";

    while ((m = reg.exec(rgb)) != null) {
        console.log(m[0]);

      hex = (Number(m[0]) - 30);
      if (hex < 0)
        hex = 0;
      hex = hex.toString(16)
      result += (hex.length == 1? "0" + hex : hex);
    }
    console.log(result);
    return result;
}

function random_color() {
    let hex = '0123456789ABCDEF';
    let result = '#';
    for (let i = 0; i < 6; i++) {
      result += hex[Math.floor(Math.random() * 16)];
    }
    return result;
}

const drawing_style = document.querySelector('#drawingstyle');

function draw() {
    // console.log(bg_color);
    // console.log(this.style.background);
    if (drawing_style['value'] === 'overwrite') {
        this.style.background = color;
    }
    else if (drawing_style['value'] === 'darken') {
        console.log('here');
        console.log(this.style.backgroundColor);
        console.log(to_hex(this.style.backgroundColor));
        console.log(bg_color);
        if (to_hex(this.style.backgroundColor) === bg_color) {
            this.style.background = color;
            // console.log(color);
            return ;
        }
        this.style.background = darken(this.style.backgroundColor);    
    }
    else if (drawing_style['value'] === 'rainbow') {
        this.style.background = random_color();
    }
    
}

pixels.forEach(pix => pix.addEventListener('mouseover', draw));


const bg_color_picker = document.querySelector('#bgcolorpicker');
const color_picker = document.querySelector('#colorpicker');

function to_hex(rgb) {
    let hex = rgb.toString();
    if (hex.match('rgb') == null)
        return rgb;

    let reg = /\d+/g;
    let m;
    let result = "#";

    while ((m = reg.exec(rgb)) != null) {
      hex = Number(m[0]).toString(16);
      result += (hex.length == 1? "0" + hex : hex);
    }
    return result;
}

function bg_color_update() {
    let new_color = this['value'];
    if (new_color === bg_color)
        return;

    pixels.forEach(pix => pix.style.background = (to_hex(pix.style.backgroundColor) == bg_color ? new_color : pix.style.background));
    bg_color = new_color;
}

function color_update() {
    color = this['value'];
}

bg_color_picker.addEventListener('change', bg_color_update);
color_picker.addEventListener('change', color_update);



