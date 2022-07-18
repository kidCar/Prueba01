
const jsonData = require("./lista.json");
console.log(jsonData);
var aux = 0;
function bannerSettime() {
  aux++;
  document.getElementById("products").src = imgSource[aux % imgSource.length];
}
window.onload = function () {
  bannerSettime(); 
  setInterval(bannerSettime, 5000); 
};
