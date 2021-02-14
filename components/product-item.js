// product-item.js

class ProductItem extends HTMLElement {
  // TODO
  constructor() {
    super();

    let shadow = this.attachShadow({
      mode: 'open'
    });

    const styleBoi = document.createElement('link');
    styleBoi.setAttribute('rel', 'stylesheet');
    styleBoi.setAttribute('href', './styles/styles.css');

    let card = document.createElement('span');
    card.className = 'product';

    let img = card.appendChild(document.createElement('img'));
    img.className = 'img';

    let title = card.appendChild(document.createElement('p'));
    title.className = 'title';

    let price = card.appendChild(document.createElement('p'));
    price.className = 'price';

    let button = card.appendChild(document.createElement('button'));
    button.className = 'button';
    button.addEventListener('click', function (event) {

      event.preventDefault();
      var cart = JSON.parse(window.localStorage.getItem('cart'));

      if (button.innerText == 'add to cart') {
        button.innerText = 'remove from cart';
        cart[this.id - 1] = 1;
        document.getElementById('cart-count').textContent++;
        alert('Added to Cart');
      }

      else {
        button.innerText = 'add to cart';
        cart[this.id - 1] = 0;
        document.getElementById('cart-count').textContent--;
        alert('Removed from Cart');
      }

      window.localStorage.setItem('cart', JSON.stringify(cart));
    });

    shadow.appendChild(card);
    shadow.appendChild(styleBoi);

  }

  assign(prod, prod_val) {
    this.id = prod.id;
    var card = this.shadowRoot.firstChild.childNodes;
    card[0].src = prod.image;
    card[0].alt = prod.description;
    card[1].innerText = prod.title;
    card[2].innerText = '$' + prod.price;
    card[3].id = prod.id;
    card[3].innerText = 'add to cart';
    if (prod_val) {
      card[3].innerText = 'remove from cart';
      document.getElementById('cart-count').textContent++;
    }
  }
}

customElements.define('product-item', ProductItem);
