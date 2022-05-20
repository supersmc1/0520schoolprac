const pokemon = {
  a : '꼬부기',
  b : '파이리',
  c : '치코리타',
  d : '리자몽'
}
//console.log(pokemon.a)
//console.log(pokemon["a"])


//props ,key
/*for(let props in pokemon){
  console.log(typeof props)
  console.log(pokemon[props])
}*/

/*for(let props of pokemon){
  console.log(typeof props)
  console.log(pokemon[props])
}*/
let pokemonArr = [];

for(let props in pokemon){
  console.log(pokemon[props])
  pokemonArr.push(pokemon[props])
}
console.log(pokemonArr)