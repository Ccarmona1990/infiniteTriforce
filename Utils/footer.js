import { get } from './getElement.js'

export const footer = ()=>{
  const currentYear = new Date().getFullYear();
  const footer = get('#footer');
  const footerContent = (`
  <p>
    &copy; <span id="date">${currentYear}</span>
    <span class="footer-logo">Infinite triforce</span> Built by <a href="https://ccarmona.netlify.app/">Christopher Carmona</a>
  </p>
  `)
  footer.innerHTML = footerContent;
}