import axios from 'axios';
const apiUrl = 'https://api.spaceXdata.com/v3/launches?limit=100';

export const searchSpaceShuttles = (filters) => {
    let filterText = '';
    if(filters) {
        for(let key in filters) {
            if(key && filters[key]!=null) {
                filterText = filterText + `&${key}=${filters[key]}`;
            }            
        }
    }
    const url = apiUrl + filterText;
    return axios.get(url);
}