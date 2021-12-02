/*
============
Modules
============
*/

// Zelda games info
import {zeldagames} from './Utils/zelda_games-info.js';

//Getting elements
import {get} from './Utils/getElement.js';

// navbar
import {navBar} from './Utils/navBar.js';

// footer
import {thisYear} from './Utils/footer.js';

// sidebar
import {sideBar, sideBarClosing} from './Utils/sideBar.js';


import {displaySingleGame, displayExtra} from './Utils/displaySingleGame.js'

/*
============
Global
============
*/
const id = localStorage.getItem('game');

/* ---- global href layout ----*/
window.addEventListener("DOMContentLoaded", async function () {
  // navBar
  navBar();
  
  // Article
  displaySingleGame(zeldagames, id)

  displayExtra()
  resources();
  
  // sideBar
  sideBar();
  sideBarClosing();
  // preFooter and footer
  thisYear();
})

/*
============
Resources 
============
*/

// Text modification
function resources() {

const extra = get('.extra');  
// Heading modifications 
const extraH1 = extra.children[0];
extraH1.style.fontSize = '35px';
extraH1.style.textTransform = 'uppercase';
extraH1.style.width = 'auto'

// Text modifications 
const extraUl = extra.children[2];

for (let i= 0; i < 3; i++){
    extraUl.children[i].style.color= 'white';
    extraUl.children[i].style.backgroundColor = 'purple';
    extraUl.children[i].style.border = '2px solid black';
    extraUl.children[i].style.width = 'auto';
    extraUl.children[i].style.fontSize = '25px';
}
}

