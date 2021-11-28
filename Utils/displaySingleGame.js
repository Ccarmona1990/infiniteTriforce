import { get } from "./getElement.js"
import { getZeldaGames } from "./getZeldaGames.js";
import {hideLoading} from './ToggleLoading.js'

export const displaySingleGame = async (data, idx)=>{
  const backupDescription = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, fugiat voluptas. Numquam modi officia, deserunt sunt sapiente optio inventore porro, ad labore rem accusamus eius ipsam quae tempora ipsa fugiat consequatur est natus eos! Quibusdam voluptates repellat laborum eos omnis, numquam, veniam, iste modi molestiae corporis dolor voluptate nostrum ratione molestias expedita natus fuga. Facere consequuntur, ipsum iusto expedita necessitatibus labore! Deleniti vel, maxime suscipit voluptatum eum atque tenetur ea fugit at, omnis quam. Minima omnis id modi tempore iusto quam nisi, fugit laudantium facere adipisci dolores nihil non voluptatibus!</p>';
  const url = 'https://zelda-api.apius.cc/api/games';

  const section = get('.singleGame');
  let nData = data.filter((zGame)=>{
      if(zGame.id == idx){
          return zGame
      }
  })

  const [{id,name,image}] = nData;
  const res = await getZeldaGames(url);
    
  hideLoading();
  const currGame = res?.filter((eGame)=>{
    if (eGame.name == name){
      return eGame
    }
  })
  let cg;
  if(currGame){
    cg = currGame[0];
  }
  const sectionContent = (`
        <div class="singleGameInfo">
          <img
            src="${image}"
            alt="${id}"
          />

        <div class='description'>
            <h1>${name}</h1><br />

            <p class="descriptionText">${cg?.description?.length > 2 || cg?.description ? cg?.description : backupDescription}</p>
            <br />

          </div>
        </div>
        `)
    document.title = name;
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

