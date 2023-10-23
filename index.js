const inputField= document.querySelector ("#search");
console.log (inputField);

const list = document.querySelectorAll (".recipe");
console.log (list);

inputField.addEventListener ("keyup",function (event){
const word =event.target.value.toLowerCase();
list.forEach (item => {
  item.querySelector("p").textContent.toLowerCase().includes(word) ? (item.style.display="block") :(item.style.display="none");

})
})
