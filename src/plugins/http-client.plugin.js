// Importaciones
const axios = require("axios");

const httpClientPlugin = {

  get: async (url) => {
    //* Method 1: http request with fetch
    // const resp = await fetch( url );
    // const data = await resp.json();
    // return data;

    //* Method 2: http request with axios
    const {data}= await axios.get(url)
    
    return data
    
  },


  post: async (url, body) => { /* TODO: */ },
  put: async (url, body) => {/* TODO: */ },
  delete: async (url, body) => {/* TODO: */ },
};

module.exports = {
  http: httpClientPlugin,
};
