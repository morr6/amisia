$(document).ready(function() {
  $('.search-input').keyup(function() {
    $('.search-results-wrapper').html('');
    var searchField = $('.search-input').val();
    var expression = new RegExp(searchField, "i");
    $.getJSON('./products/productsList.json', function(data) {
      $.each(data, function(key, value){
        value.map(product => {
          if(product.name.search(expression) != -1) {
            $('.search-results-wrapper').append(`
              <div class='search-product-wrapper'>
                <img class='search-product-image' src='${product.imagePath}' alt='${name}' />
                <span class='search-product-name'> ${product.name} </span>
                <span class='search-product-price'> ${product.price} zł </span>
                <button class='add-to-basket-button' onClick="addProductToStorage('${product.name}','${product.price}','${product.imagePath}')">
                  <i class="basket-icon fas fa-shopping-basket"></i>
                </button>
              </div>
            `)
          }          
        })
      })
    })
  })
  
  $(document).click(function(e) {
    console.log(e.target)
    if ($(e.target).is('.search-product-wrapper, basket-icon')) {
      return
    }
    else {
      $('.search-product-wrapper').css({'display':'none'})
    }
  })

})