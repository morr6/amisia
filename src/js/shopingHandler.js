const refreshBasket = () => {
  var basketContent = $('.basket-content');
  basketProducts = getProductsFromStorage();
  window.localStorage.setItem('products', JSON.stringify(basketProducts));

  basketContent.html('')

  setBasketContent();
}

const setBasketContent = () => {
  basketProducts = getProductsFromStorage();
  var basketContent = $('.basket-content');
  
  const countBasketValue = () => {
    basketPrice = 0;

    basketProducts.map(product => {
      basketPrice += Number(product.price)
    })

    return basketPrice;
  }

  $('.items-amount').html(basketProducts.length);
  $('.basket-value').html(countBasketValue() + ",00 zł")

  basketProducts.map(product => {
    basketContent.append(`
      <div class='basket-product-wrapper'>
        <img class='basket-product-image' src='${product.imagePath}' alt='${name}' />
        <span class='basket-product-name'> ${product.name} </span>
        <span class='basket-product-price'> ${product.price} </span>
        <button class='delete-product' onClick="deleteProductFromStorage('${product.name}')"> x </button>
      </div>
    `)
  })
}