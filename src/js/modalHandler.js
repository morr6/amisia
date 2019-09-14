const openModal = () => {
  const openModalButton = $(".add-to-basket-button");
  const modalContent = $('.modal-content')
  const modal = $(".modal");

  modal.css({"transform":"scale(1)"});
  modalContent.css({"transform":"scale(1)"}); 
}

const closeModal = () => {
  const closeButton = $('.closeModal')
  const modal = $(".modal");
  const modalContent = $('.modal-content')
  
  modal && modal.css({"transform":"scale(0)"});
  modalContent.css({"transform":"scale(0)"});
}
  
$(document).ready(function() {
  const modal = $(".modal");
  const modalContent = $('.modal-content')
  
  $(window).click(function(event) {
    if (event.target.className == 'modal') {
      modal.css({"transform":"scale(0)"});
      modalContent.css({"transform":"scale(0)"});
    }
  })
})
