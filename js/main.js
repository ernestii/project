/* Open cart and add item when the "Add to cart" button is clicked */
$('#addtocart').click(function() {

  /* Render the new cart item */
  const { photo, title, price } = $(this).data();

  const template = `
  <div class="cart_item added" style="background-image: url(${photo})">
    <div class="title">${title}</div>
    <div class="price">${price}</div>
  </div>
  `;

  /* Add the item to cart */
  $('#cart_items').append(template);

  /* Scroll cart to the bottom (so the new item is visible) */
  $('#cart').scrollTop($('.cart__inner').height());

  /* Show the cart after a quick delay */
  setTimeout(function() {
    $('body').toggleClass('cart-shown');
  }, 50);

  /* Remove .added class from the new added item, so it will not animate  */
  setTimeout(function() {
    $('.cart_item').removeClass('added');
  }, 1000);
  
  return false;
});

$('#page, #checkout, body').click(function() {
  $('body').removeClass('cart-shown');
});
