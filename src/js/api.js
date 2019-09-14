const getProducts = () => {
  var products = [];

  $.ajax({
    url : "./products/productsList.json",
    dataType : "json"
  })
  .done((res) => {  
    const getRecommendedProducts = () => {
      res.products.filter(val => val.recommended).forEach(product => {
        $('.recommended-owl').owlCarousel()
        .trigger('add.owl.carousel', [jQuery(`
          <div class="product-wrapper">
            <img class='product-image' src='${product.imagePath}' alt='${product.name}' />
            <button class='add-to-basket-button' onClick="addProductToStorage('${product.name}','${product.price}','${product.imagePath}')">
              <i class="basket-icon fas fa-shopping-basket"></i>
            </button>
            <span class="product-name"> ${product.name} </span>
            <span class="product-price"> ${product.price} zł </span>          
          </div>`
        )])
        .owlCarousel('update')
      })
    }

    const getBestsellers = () => {
      res.products.filter(val => val.bestseller).forEach(product => {
        $('.bestseller-owl').owlCarousel()
        .trigger('add.owl.carousel', [jQuery(`
          <div 
            class="product-wrapper">
              <img class='product-image' src='${product.imagePath}' alt='${product.name}' />
              <button class='add-to-basket-button' onClick="addProductToStorage('${product.name}','${product.price}','${product.imagePath}')">
                <i class="basket-icon fas fa-shopping-basket"></i>
              </button>
              <span class="product-name"> ${product.name} </span>
              <span class="product-price"> ${product.price} zł </span>          
          </div>`
        )])
        .owlCarousel('update')
      })
    }

    getRecommendedProducts();
    getBestsellers();
  
  })  
}

$(document).ready(function() {
  initStorage();
  getProducts();
})
