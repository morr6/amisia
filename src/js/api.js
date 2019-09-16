const getProducts = () => {
  $.ajax({
    url : "./products/productsList.json",
    dataType : "json"
  })
  .done((res) => {  
    setRecommendedProducts(res);
    setBestsellers(res)
  
  })  
}