import { get } from "./getElement.js"
import {hideLoading} from './ToggleLoading.js'

export const displaySingleGame = async (data, idx)=>{ 

  const section = get('.singleGame');
  let nData = data.filter((zGame)=>{
      if(zGame.id == idx){
          return zGame
      }
  })

  const [{id,game,image, description}] = nData;

  hideLoading();
  
  const sectionContent = (`
        <div class="singleGameInfo">
          <img
            src="${image}"
            alt="${id}"
          />

        <div class='description'>
            <h1>${game}</h1><br />

            <p class="descriptionText">${description}</p>
            <br />

          </div>
        </div>
        `)
    document.title = game;
    section.innerHTML = sectionContent;
}

export const displayExtra = ()=>{
    const e = get('.extra');
    const extra = (`
    
    <h2>Resources</h2><br />
    <ul>
    <li>
    <span>Do you need a guide? Go to</span>
                <a
                  href="https://www.ign.com/wikis/the-legend-of-zelda/Basics#Enemy_Encounters"
                  >IGN</a
                >
              </li><br />
              <li>
                <span>Do you need a play? Go to</span>
                <a href="https://www.romsgames.net/roms/">Romsgames</a>
              </li>
            </ul>
            
    `)
    e.innerHTML = extra
}

