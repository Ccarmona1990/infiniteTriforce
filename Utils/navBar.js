import { get } from './getElement.js'

 // navbar added dynamically
export function navBar() {
  const nav = get('#navbar');

  const navh = `
  <!-- nav header -->
  
  <div id="nav-header">
  
  <!-- logo -->
  
  <div>
          
  <a href="./Index.html">
  <img id="logo" src="./Images/Component 1.png" alt="logo" />
            </a>
            
          </div>
          
          <!-- nav-header section -->
          
          <div class="navHeaderSection">
          
          <!-- nav-links -->
          
          <div id="nav-links">
          
          <a href="./Index.html" class="nav-link">home</a>
          
          <a href="./About_page.html" class="nav-link">about</a>
          
          <a href="./Contact_page.html" class="nav-link">contact</a>
          
          </div>
          
          <!-- Icons -->
          
          <div class="navIcons">
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
          
          
          <!-- toggle -->
          
          <div id="togglebtn">
          <button id="navBtn" type="button" class="nav-btn">
          <i class="fas fa-align-justify fa-2x"></i>
          </button>
          </div>
          </div>              
              </div>
  `;
  
  nav.innerHTML = navh;
  
}
