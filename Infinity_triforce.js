
/*
============
Modules
============
*/

// navbar
import {navBar} from './Utils/navBar.js';

// Pre-footer
import {preFooter, newsletterForm} from './Utils/preFooter.js';

// footer
import {footer} from './Utils/footer.js';

// sidebar
import {sideBar, sideBarClosing} from './Utils/sideBar.js';

// Article
import displayZeldaGames from './Utils/displayZeldaGames.js'

import {main} from './Utils/articleHero.js'

import setGame from './Utils/setGame.js';

import {search} from './Utils/searchbox.js'

import './Utils/scroll.js';

import {getAsyncData} from './Utils/getData.js'

const url = 'https://zeldagames-api.herokuapp.com/'

/* ---- global href layout ----*/
window.addEventListener("DOMContentLoaded", async function () {
  // navBar
  navBar();
  
  // Article
  main()
  await getAsyncData(url, (data)=>{
    displayZeldaGames(data)
    search(data)
  });
  setGame()
  
  // sideBar
  sideBar();
  sideBarClosing();

  // preFooter and footer
  preFooter();
  newsletterForm();
  footer();
})

