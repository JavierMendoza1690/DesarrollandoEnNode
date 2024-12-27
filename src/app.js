// DEPENDENCIAS
// require('./js-foundation/02.-destructuring');
// require('./js-foundation/03.-callbacks');

// *05.-FACTORY FUNCTIONS
// const {getAge, getUUID} = require('./plugins')
// const {buildMakePerson} = require("./js-foundation/05.-factory");

// const obj = {name:'javier', birthdate: '1990-11-16'}
// const makePerson = buildMakePerson( {getUUID, getAge});
// const Javier = makePerson(obj)

// console.log(Javier);

// *06.-PROMISES
// const { getPokemonById } = require("./js-foundation/06.-promises");

// Promesa con then
// getPokemonById(4)
//   .then((pokemonName) => console.log({ pokemonName }))
//   .catch((err) => console.error("Por favor intente de nuevo"))
//   .finally(() => console.log("Finalmente"));
  
  // *07.-WINSTON
  
  const { buildLogger} = require('./plugins');
  const logger = buildLogger('app.js');
  
  logger.log('Hola mundo')









// logger.error('Esto es algo malo');

// getPokemonById(4)
//     .then(pokemonName => console.log({pokemonName}))
//     .catch(err => console.error('Por favor intente de nuevo'))
//     .finally(()=>console.log('Finalmente'));

// !Referencia a la funcion factory y uso
// const makePerson = buildMakePerson( {getUUID, getAge});
// const obj = {name:'javier', birthdate: '1990-11-16'}

// const Javier = makePerson(obj)

// console.log(Javier);
