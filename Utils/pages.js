import { navBar } from "./navBar.js";
import { sideBar, sideBarClosing } from "./sideBar.js";
import {contactForm} from './contactForm.js'
import {thisYear} from './footer.js';

window.addEventListener('DOMContentLoaded', ()=>{
  navBar();
  thisYear();
  
  // sideBar
  sideBar();
  sideBarClosing();
})
contactForm();
