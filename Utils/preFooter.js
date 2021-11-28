
// pre-footer added dynamically
export function preFooter(get) {
  const pFooter = get('.pre-footer');
  const pFS1 =  `
  
      <!-- preFooter-section1 -->
      <div class="preFooter-section1">

        <!-- Logo -->
      <div>
      <a href="/Projects/Zelda's games website project/Index.html">
              <img id="logo" src="/Projects/Zelda's games website project/Images/Component 1.png" alt="logo" />
            </a>
            </div>

            <!-- Icons -->

            <div>
            <h1>Follow Us</h1>
            <a href="#">
              <i class="fab fa-facebook fa-2x "></i>
            </a>
            <a href="#">
              <i class="fab fa-instagram fa-2x"></i>
            </a>
            <a href="#">
              <i class="fab fa-twitter fa-2x"></i>
            </a>
            <a href="#">
              <i class="fab fa-pinterest fa-2x"></i>
            </a>
            </div>
            </div>

            <!-- End of preFooter-section1 -->
  `;
  const pFS2 =  `
  <!-- preFooter-section2 -->

            <div class="preFooter-section2">

              <!-- NewsLetter -->

            <div class="newsLetterSection">
              <p >Subscribe to our newsletter</p>

                <form 
                action="https://formspree.io/f/mzbykkrd" method="POST" 
                class="newsletter newsletterForm">

            <input 
            name="_replyto" itemid="email"
            type="email" class="newsLetter email" placeholder="abc@email.com" 
            id="newsLetterEmail"
            required>
            
              <button class="newsLetter aside-btn">
                <i class="fas fa-paper-plane"></i>
              
            </button>
            </form> </div><br>

            
            <!-- Links of the site -->
            
            <div class="nav-preFooter" >
          
                <a href="./Index.html" class="aside-link">home</a>
        
                <a href="./About_page.html" class="aside-link">about</a>
            
                <a href="./Contact_page.html" class="aside-link">contact</a>
            
            </div>

            </div>
            
            <!-- End of preFooter-section1 -->

  `;
  const pfContent = pFS1 + pFS2
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
            required>
            
              <button class="newsLetter aside-btn">
                <i class="fas fa-paper-plane"></i>
              
            </button>
            </form> </div><br>
  `)
  //pfContent
  pFooter.innerHTML = newsLetter;
}

// Newsletter
export function newsletterForm(get,reseter) {
  const nlSubmitBtn = get('.aside-btn');
  const nlEmail = get('#newsLetterEmail');
    
    nlSubmitBtn.addEventListener("mouseleave",function () { 
      reseter(nlEmail);
  })
}
