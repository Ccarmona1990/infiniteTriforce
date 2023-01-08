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
    <span>Do you need a guide for this game? Go to</span>
                <a
                  href="https://www.zeldadungeon.net/"
                  >zeldadungeon</a
                >
              </li><br />
              <li>
                <span>Do you want to play this game? Go to</span>
                <a href="https://myemulator.online/tag/zelda">myemulator</a>
              </li>
            </ul>
            
    `)
    e.innerHTML = extra
}

