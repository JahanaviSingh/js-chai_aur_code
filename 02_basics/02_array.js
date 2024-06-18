const marvel_heroes = ["Spiderman", "Thor", "Ironman"]
const Dc_heroes = ["Superman", "Flash", "Batman"]

/*marvel_heroes.push(Dc_heroes)
console.log(marvel_heroes);
console.log(marvel_heroes[3][1]);*/
console.log(marvel_heroes.concat(Dc_heroes))
console.log(marvel_heroes);
const allNewHeroes = [...marvel_heroes, ...Dc_heroes]
console.log(allNewHeroes);
const another_array = [1, 2, 3, [34, 5, [9, 0, 44, 6]]]
const real_array = another_array.flat(Infinity)
console.log(real_array);


console.log(Array.isArray("Jahanavi"));
console.log(Array.from("Jahanavi"));
console.log(Array.from({Name : "Jahanavi"}));

