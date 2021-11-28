
// zooming in and out of a picture
export function zoom(modal, varr) {
    if (modal){
        varr.addEventListener('click', () => 
        modal.classList.toggle('is_visible'))}
    }

    export function zoomArr(modal, varr) {
    if (modal){
        varr.forEach((item) =>
            item.addEventListener('click', () => modal.classList.toggle('is_visible')))}
    }
