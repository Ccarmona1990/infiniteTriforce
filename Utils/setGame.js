import {gets } from "./getElement.js";

const setGame = ()=>{
    const zeldaGame = gets('.zelda_game')    
    const arr = Array.from(zeldaGame)
    arr.map((game)=>{
        game.addEventListener('click',(e)=>{
            const id = e.currentTarget.dataset.id;
            console.log(id);
            localStorage.setItem('game', id);
        })
    })
}

export default setGame;