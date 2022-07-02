//fetch
fetch("https://pokeapi.co/api/v2/pokemon")
  .then((resp) => resp.json())
  .then((data) => {
    //console.log(data.results.map(pokemon => pokemon.name));
  })
  .catch((error) => console.log(error));

//async await
const ObtenerPokemones = async () => {
  try {
    const resp = await fetch("https://pokeapi.co/api/v2/pokemon");
    const data = await resp.json();

    console.log(data);


  } catch (error) {
    console.log(error);
  }
};

ObtenerPokemones();