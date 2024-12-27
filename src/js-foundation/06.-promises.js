const {http} = require('../plugins')

const getPokemonById = async (id, callback) =>{
   
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

    // * Metodo 1: peticion http
    // return fetch( url )
    // .then( response => response.json())
    // // .then( ()=> {throw new Error('Pokemon no existe')})
    // .then( pokemon => pokemon.name)

     // * Metodo 2: peticion http
    //  const response = await fetch (url);
    //  const pokemon = await response.json();
    //  throw new Error('Pokemon no existe') // simulando error
     
     //* Metodo 3: peticion http con arquitectura de plugins (patron adaptador)
     const pokemon = await http.get(url); //solicitud con axios



    return pokemon.name;



    return 10
}

module.exports = {getPokemonById}