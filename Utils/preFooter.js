import { get } from "./getElement.js";

// pre-footer added dynamically
export function preFooter() {
  const pFooter = get('.pre-footer');
  const newsLetter = (`
  <div class="newsLetterSection">
              <h3>Subscribe to our newsletter</h3>

                <form 
                action="https://formspree.io/f/mzbykkrd" method="POST" 
                class="newsletter newsletterForm">

            <input 
            name="_replyto" itemid="email"
            type="email" class="newsLetter email" placeholder="abc@email.com" 
            id="newsLetterEmail"
            required/>
            
              <button class="newsLetter aside-btn">
                <i class="fas fa-paper-plane"></i>
            </button>
            </form> </div><br>
  `)
  pFooter.innerHTML = newsLetter;
}

// Newsletter
export function newsletterForm() {
  const nlEmail = get('#newsLetterEmail');
  const nlForm = get('.newsletterForm');
  
  nlForm?.addEventListener('submit', ()=>{
    setTimeout(()=>{
      nlEmail.value = ''
    },100)} 
  )
}
