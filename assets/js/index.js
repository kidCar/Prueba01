// var imgSource = new Array(
//     ["assets/img/0.png"],
//     ["assets/img/1.jpg"],
//     ["assets/img/2.jpg"],
//     ["assets/img/3.jpg"]
//   );
//   var aux = 0;
//   function bannerSettime() {
//     aux++;
//     document.getElementById("imagen").src = imgSource[aux % imgSource.length];
//   }
//   window.onload = function () {
//     bannerSettime();//Primer imagen
//     setInterval(bannerSettime, 5000); // Indicamos que cada 5 segundos cambie la imagen
//   };

// const getPokemons = async () => {
//     let card = "";

//     // fetch('https://pokeapi.co/api/v2/pokemon/', { method: 'GET' })
//     //     .then(response => response.json())
//     //     .then(pokemons => console.log('pokemons: ', pokemons));
//     //const response = await fetch(baseUrlAPI);
//     //const response = await fetch('./assets/kanto.json');
//     const response = await fetch('./assets/lista.json');
//     const responseJson =  await response.json();
//     console.log(responseJson);
//     const pokemons = responseJson.results;
//     for(const element of pokemons){
//         const response = await fetch(element.url);
//         const imgResponseJson = await response.json();
//         normalizePokemonData(element.name, imgResponseJson)
//     };

//     pokemons.forEach((project) => {
//       card =
//         card +
//         `<div class="col">
//             <div class="card shadow-sm">
//               <img src="${project.id}" class="card-img-top">
//               <div class="card-body">
//                 <h5 class="card-title">${project.id}</h5>
//                 <p class="card-text">${project.name}</p>
//                 <div class="row">
//                   ${project.ThumbnailImage}
//                 </div>
//               </div>
//             </div>
//           </div>`;

//     });
//     document.getElementById("projects").innerHTML = card;
// };

// const fs= require('fs');

// let data =fs.readFileSync('Prueba/assets/lista.json');
// // console.log(data);
// let products=JSON.parse(data).hoja;
// console.log(products)
// console.log(typeof(products));

var imgSource = new Array(
  ["assets/img/0.png"],
  ["assets/img/1.jpg"],
  ["assets/img/2.jpg"],
  ["assets/img/3.jpg"]
);

const jsonData = require("./students.json");
console.log(jsonData);
var aux = 0;
function bannerSettime() {
  aux++;
  document.getElementById("products").src = imgSource[aux % imgSource.length];
}
window.onload = function () {
  bannerSettime(); //Primer imagen
  setInterval(bannerSettime, 5000); // Indicamos que cada 5 segundos cambie la imagen
};
