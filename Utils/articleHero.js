import { get } from "./getElement.js";

export function main(){
    const main = get('main');
    main.innerHTML = `
  <section>
  <h1 class="articleHeader">Zelda Games</h1> <div class="underline"></div>
  </section>

  <section class='searchSection'>
  <div id="searchbar">
          <input type="text" name="" placeholder="search.." id="searchBox" />
          <button type="button" id="searchIcon">
          <i class="fas fa-search"></i>
            </button>
            </div>
  </section> <br><br>

   <article class="articleHero">
      <div class="zelda_games"></div>
   </article>
  `;
}