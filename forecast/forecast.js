/*import axios from 'axios';

export default {
    data: () => ({
        posts: [],
        errors: []
    }
    ),
 
created (){
    axios.get('https://api.darksky.net/forecast/1b56dc1521cfdaf67fa3f1f78ccf05ac/37.8267,-122.4233')
        .then(response => {
            this.posts = response.data

        })
        .catch(e => {
            this.errors.push(e)
    })
    }   
}*/
const axios = require ('axios');

//const url = 'https://api.darksky.net/forecast/1b56dc1521cfdaf67fa3f1f78ccf05ac/37.8267,-122.4233'

module.exports.getForecast = function (x,y) {
    return axios
        .get(`https://api.darksky.net/forecast/1b56dc1521cfdaf67fa3f1f78ccf05ac/${x},${y}`)
        .then(response => response.data);
}
 
//export function forecast (url);
//forecast (url);