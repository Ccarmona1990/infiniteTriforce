import { navBar } from "./navBar.js";

// footer
import {thisYear} from './footer.js';
import {reseter} from './deleters.js'
import { get } from "./getElement.js";
import { sideBar, sideBarClosing } from "./sideBar.js";


window.addEventListener('DOMContentLoaded', ()=>{
  navBar();
  thisYear();

  // sideBar
  sideBar();
  sideBarClosing();
})

/*
============
Contact page
============
*/

function contactForm() {
    const contactSubmitBtn = get('#btnContact');
    const cf_Email = get('#emailContactForm');
    const cf_Name = get('#nameContactForm');
    const cf_Message = get('#messageContactForm');

    //console.log(contactSubmitBtn);
   if (contactSubmitBtn !== null) {
        contactSubmitBtn.addEventListener("mouseleave", () =>{
      reseter(cf_Email);
      reseter(cf_Name);
      reseter(cf_Message);
        })

}}
contactForm();
