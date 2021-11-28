import { get } from "./getElement.js";

// sideBar added dynamically
export function sideBar() {

  const nAside = document.createElement('aside');
  nAside.classList.add('sideBar')
  document.body.appendChild(nAside);

  const sideBar = get('.sideBar');
  
  sideBar.innerHTML = `
  <!-- side bar -->
      <div class="sidebar-header">
      <!-- logo -->
      
          <div>
          
          <img id="logo" src="./Images/Component 1.png" alt="logo" />
          
          </div>
          <button class="closeBtn">
          <i class="fas fa-times fa-2x"></i>
          </button>
      </div>

      <div class="sideBar-Links">
      <a href="../Index.html" class="nav-link">home</a>
      
      <a href="../About_page.html" class="nav-link">about</a>
      
      <a href="../Contact_page.html" class="nav-link">contact</a>
      </div>
      
      <!-- Icons -->
      
      <div class="sideBarIcons">
      <a href="#">
      <i class="fab fa-facebook fa-1x"></i>
      </a>
      <a href="#">
      <i class="fab fa-instagram fa-1x"></i>
      </a>
      <a href="#">
      <i class="fab fa-twitter fa-1x"></i>
      </a>
      <a href="/js/js projects/MyJSprojects.html">
      <i class="fab fa-pinterest fa-1x"></i>
      </a>
      <a href="#">
      <i class="fab fa-linkedin fa-1x"></i>
      </a>
      <a href="#">
      <i class="fab fa-github fa-1x"></i>
      </a>
      </div>
      `;
}

// closing the sidebar by clicking else where but inside it
export function sideBarClosing () {
  const sidebar = get('.sideBar');
  const toggleBtn= get('#navBtn');
  const closeBtn = get('.closeBtn');
  const btns = [toggleBtn, closeBtn];

  //closing sidebar by click elsewhere
document.addEventListener('click', function(e){
    if(!e.target.classList.contains('sideBar-Links') && !e.target.classList.contains('sidebar-header') && !e.target.classList.contains('sideBarIcons') && !e.target.classList.contains('sideBar') && e.target.className !== 'fas fa-align-justify fa-2x'){
    sidebar.classList.remove('show-sideBar')
  }
})

// closing sidebar by clicking on specific btns
btns.forEach(function (item) {
  item.addEventListener("click",function () {
    sidebar.classList.toggle('show-sideBar')
  })
})

}
