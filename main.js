const menuEmail = document.querySelector('.navbar-email');
const menuHamIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const productDetailCloseIcon = document.querySelector('.product-detail-close')
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#productDetail');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);

function toggleDesktopMenu() {
  const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

  if (!isAsideClosed) {
    shoppingCartContainer.classList.add('inactive');
  }
  
  desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
  const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

  if (!isAsideClosed) {
    shoppingCartContainer.classList.add('inactive'); 
  }

  closeProductDetailAside();
  
  mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside() {
  const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
  
  if (!isMobileMenuClosed) {
    mobileMenu.classList.add('inactive');
  }

  const isProductDetailClosed = productDetailContainer.classList.contains('inactive');
  
  if (!isProductDetailClosed) {
    productDetailContainer.classList.add('inactive'); 
  }
  
  shoppingCartContainer.classList.toggle('inactive');
}

function openProductDetailAside() {
  shoppingCartContainer.classList.add('inactive');
  productDetailContainer.classList.remove('inactive');
}

function closeProductDetailAside() {
  productDetailContainer.classList.add('inactive');
}

const productList = [];
productList.push({
  name: 'Bike',
  price: 120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
  name: 'Pantalla',
  price: 220,
  image: 'https://cloudfront-us-east-1.images.arcpublishing.com/infobae/G2AYJN5AF5DBLG5XRDIW2IZ6UU.jpg',
});
productList.push({
  name: 'Compu',
  price: 620,
  image: 'data:image/jpeg;base64,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',
});
productList.push({
  name: 'Cornecta',
  price: 150,
  image: 'https://w7.pngwing.com/pngs/588/496/png-transparent-subwoofer-computer-speakers-loudspeaker-public-address-systems-powered-speakers-bluetooth-bluetooth-electronic-device-sound-thumbnail.png',
});
productList.push({
  name: 'Mouse',
  price: 100,
  image: 'https://pngimg.com/uploads/computer_mouse/computer_mouse_PNG7672.png',
});
productList.push({
  name: 'Compu',
  price: 620,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

function renderProducts(arr) {
  for (product of arr) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
  
    // product= {name, price, image} -> product.image
    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);
    productImg.addEventListener('click', openProductDetailAside);
  
    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');
  
    const productInfoDiv = document.createElement('div');
  
    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;
    const productName = document.createElement('p');
    productName.innerText = product.name;
  
    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);
  
    const productInfoFigure = document.createElement('figure');
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
  
    productInfoFigure.appendChild(productImgCart);
  
    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);
  
    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);
  
    cardsContainer.appendChild(productCard);
  }
}

renderProducts(productList);
