import displayZeldaGames from "./displayZeldaGames.js";
import { get } from "./getElement.js";

export function search (arr){
  const searchBox = get('#searchBox')
  searchBox.addEventListener('input',(e)=>{
    e.preventDefault()
    let value = e.currentTarget.value;
    let filteredData = arr.filter((zGame)=>{
      const {game} = zGame;
      if(value == ''){
        return zGame
      } else if(game.toLowerCase().includes(value.toLowerCase())){
        return zGame
      }
    })
    displayZeldaGames(filteredData)
  })
}