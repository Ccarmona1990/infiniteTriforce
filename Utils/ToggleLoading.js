import { get } from "./getElement.js";



export const showLoading = ()=>{
    const loading = get('.loading');
    loading.classList.remove('hide');
}

export const hideLoading = ()=>{
    const loading = get('.loading');
    loading.classList.add('hide');
}