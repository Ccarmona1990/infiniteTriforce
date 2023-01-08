import {get} from './getElement.js'

// Zelda games added dynamically
function displayZeldaGames(arr) {
  const zeldaGames = get('.zelda_games');
  
  let displayGames = arr.map(({id, game, image})=>{
    return `
  <a data-id='${id}' class="zelda_game" 
  href="./SingleGame.html">
  <h2 >${game} </h2>
            
  <img class="gameImg" 
    src="${image}"
    alt="${id}"/></a>
  `
  })
  displayGames = displayGames.join('');
    
  zeldaGames.innerHTML = displayGames;
}

export default displayZeldaGames;