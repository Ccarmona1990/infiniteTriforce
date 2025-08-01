import { get } from './getElement.js'

export const footer = ()=>{
  const currentYear = new Date().getFullYear();
  const footer = get('#footer');
  const footerContent = (`
  <p>
    &copy; <span id="date"> Built in 2021 </span>
    <span class="footer-logo">Infinite triforce</span> Built by <a href="https://christophercarmona.dev/">Christopher Carmona</a>
  </p>
  `)
  footer.innerHTML = footerContent;
}