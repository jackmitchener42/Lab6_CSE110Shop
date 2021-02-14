// Script.js

window.addEventListener('DOMContentLoaded', () => {
  if(window.localStorage.getItem('data') == undefined) {
    fetch('https://fakestoreapi.com/products').then(response =>response.json()).then(data =>{
    window.localStorage.setItem('data',JSON.stringify(data));
  })
}

var products = JSON.parse(window.localStorage.getItem('data'));

var cart = new Array(products.length).fill(0);

if(window.localStorage.getItem('cart') == undefined){
  window.localStorage.setItem('cart', JSON.stringify(cart));
}
else{
  cart = JSON.parse(window.localStorage.getItem('cart'));
}
var product_list = document.getElementById('product-list');
for(var i = 0; i < products.length; i++){
  var item = product_list.appendChild(document.createElement('product-item'));
  //could use other built in functions or change function name
  item.assign(products[i], cart[i]);
}
});