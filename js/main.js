$('#addtocart').click(function() {

  /* Render the new cart item */
  const { photo, title, price } = $(this).data();

  const template = `
  <div class="cart_item added" style="background-image: url(${photo})">
    <div class="title">${title}</div>
    <div class="price">${price}</div>
  </div>
  `;

  $('#cart_items').append(template);
  $('#cart').scrollTop($('.cart__inner').height());

  setTimeout(function() {
    $('body').toggleClass('cart-shown');
  }, 50);

  setTimeout(function() {
    $('.cart_item').removeClass('added');
  }, 1000);
  
  return false;
});

$('#page, #checkout').click(function() {
  $('body').removeClass('cart-shown');
});
