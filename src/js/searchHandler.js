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
  
  $('.search-input').focusout(function() {
    $('.search-results-wrapper').css({"display":'none'})
  })
  $('.search-input').focusin(function() {
    $('.search-results-wrapper').css({"display":'block'})
  })
})







// const searchForProduct = () => {
//   $.ajax({
//     url : "./products/productsList.json",
//     dataType : "json"
//   })
//   .done((res) => { 
//     tag = [...res.products.map(product => 
//       product.name)].map(productName => {
//         console.log(productName.split(" "))
//       })
//   })
// }