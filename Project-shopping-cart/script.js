const cartParent = document.querySelector('.cart__items');

function createProductImageElement(imageSource) {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
}

function createCustomElement(element, className, innerText) {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
}

function createProductItemElement({ sku, name, image }) {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
}

function getSkuFromProductItem(item) {
  return item.querySelector('span.item__sku').innerText;
}

const priceElement = document.querySelector('.total-price');

function sumPrice(price) {
  const newPrice = parseFloat(priceElement.innerText) + parseFloat(price);
  priceElement.innerHTML = parseFloat(newPrice).toFixed(2);
}

function subPrice(price) {
  const newPrice = parseFloat(priceElement.innerText) - parseFloat(price);
  priceElement.innerHTML = parseFloat(newPrice).toFixed(2);
}

function cartItemClickListener(event) {
  const item = event.target;
  cartParent.removeChild(item);
  saveCartItems('cartItems', cartParent.innerHTML);
  const newArray = item.innerText.split('$');
  subPrice(newArray[1]);
}

function createCartItemElement({ sku, name, salePrice }) {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
}

async function creteItemCart(id) {
  const item = await fetchItem(id);
  const {id: sku, title: name, price: salePrice} = item;
  cartParent.appendChild(createCartItemElement({sku, name, salePrice}));
  saveCartItems('cartItems', cartParent.innerHTML);
  sumPrice(salePrice);
}

function loading(parent) {
  const loadingElement = createCustomElement('section', 'loading', 'Loading');
  parent.appendChild(loadingElement);
}

function loaded(parent) {
  const loadingElement = document.querySelector('.loading');
  parent.removeChild(loadingElement);
}

async function createItems() {
  const itemsParent = document.querySelector('.items');
  loading(itemsParent);
  const products = await fetchProducts('computador');
  loaded(itemsParent);
  products.results.forEach(({id: sku, title: name, thumbnail: image}, index) => {
    itemsParent.appendChild(createProductItemElement({sku, name, image}));
    const button = document.querySelectorAll('.item__add');
    button[index].addEventListener('click', () => creteItemCart(sku));
  });
}
createItems();

function emptyCartLogic() {
  cartParent.innerHTML = '';
  saveCartItems('cartItems', '');
  priceElement.innerHTML = '0.00';
}

const emptyButton = document.querySelector('.empty-cart');
emptyButton.addEventListener('click', emptyCartLogic);

window.onload = () => {
  if (localStorage.getItem('cartItems')) {
    const savedItems = getSavedCartItems('cartItems');
    cartParent.innerHTML = savedItems;
    const lis = document.querySelectorAll('li');
    lis.forEach((li) => {
      li.addEventListener('click', cartItemClickListener);
      const newArray = li.innerText.split('$');
      sumPrice(newArray[1]);
    });
  }
};
