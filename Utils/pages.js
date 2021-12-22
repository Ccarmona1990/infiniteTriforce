import { navBar } from "./navBar.js";
import { sideBar, sideBarClosing } from "./sideBar.js";
import {contactForm} from './contactForm.js'
import {footer} from './footer.js';

window.addEventListener('DOMContentLoaded', ()=>{
  navBar();
  footer();
  
  // sideBar
  sideBar();
  sideBarClosing();
})
contactForm();
