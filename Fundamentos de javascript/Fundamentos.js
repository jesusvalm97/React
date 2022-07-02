//fetch
//fetch("https://pokeapi.co/api/v2/pokemon")
//  .then((resp) => resp.json())
//  .then((data) => {
//console.log(data.results.map(pokemon => pokemon.name));
//  })
//  .catch((error) => console.log(error));

//async await
const ObtenerPokemones = async () => {
  try {
    const resp = await fetch("https://pokeapi.co/api/v2/pokemon");
    const data = await resp.json();

    //console.log(data.results);

    /*
    map nos sirve para indicar a un arreglo o lista que nos
    devuelva solo un arreglo de la propiedad que le indiquemos
    // de cada objeto del arreglo/lista original
    */
    console.log(data.results.map((pokemon) => pokemon.name));

    /*
    filter nos sirve para indicar a un arreglo o lista que nos
    devuelva solo un arreglo de la propiedad que le indiquemos
    de cada objeto del arreglo/lista original pero también
    podemos filtrar el resultado, por ejemplo en este caso
    indicamos que nos traiga los nombres de los pokemones,
    de ese resultado que solo traiga los que el nombres sea
    igual a bulbasaur
    */
    console.log(data.results.filter((pokemon) => pokemon.name !== "bulbasaur"));
  } catch (error) {
    console.log(error);
  }
};
ObtenerPokemones();