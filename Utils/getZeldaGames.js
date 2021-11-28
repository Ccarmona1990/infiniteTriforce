
import {showLoading} from './ToggleLoading.js'

export async function getZeldaGames (url) {
    showLoading()
    try {
        const data = await fetch(url);
        if(!data.ok){
            throw new Error (`There was an error. ${data.status}`)
        }
        const res = await data.json();
        return res.data; 
        
    } catch (error) {
        console.log(error)
    }
}

