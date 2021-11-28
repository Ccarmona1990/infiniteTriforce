import { get } from "./getElement.js";

export function contactForm() {
    const cf_Email = get('#emailContactForm');
    const cf_Name = get('#nameContactForm');
    const cf_Message = get('#messageContactForm');
    const contactForm = get('.contactForm');
    contactForm.addEventListener('submit', setTimeout(()=>{
            cf_Email.value ='';
            cf_Name.value = '';
            cf_Message.value = '';
        },100)
    )
}