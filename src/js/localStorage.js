const getProductsFromStorage = () => {
  const products = window.localStorage.getItem('products')
  try {
      return JSON.parse(products);
  } catch (err) {
      return products;
  }    
}

const initLocalStorage = () => {
  const products = getProductsFromStorage()
  const initArray = []

  if (!products) {
      window.localStorage.setItem('products', JSON.stringify(initArray))
  }
}

const addProductToStorage = (name,price,imagePath) => {
  setBasketContent()
  openModal()
  const products = getProductsFromStorage();
  const newProducts = JSON.stringify([
    ...products, {name: name, price: price, imagePath: imagePath}
  ])

  window.localStorage.setItem('products', newProducts);
  refreshBasket();
}

const deleteProductFromStorage = (productName) => {
  const products = getProductsFromStorage() 

  if (productName) {
      const newProducts = products.filter( product => product.name !== productName)
      window.localStorage.setItem('products', JSON.stringify(newProducts))
  }
  refreshBasket();
}


