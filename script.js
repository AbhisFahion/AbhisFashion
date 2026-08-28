function order(product, price){
  const msg = `Hi AbhisFashion 👋%0A%0AI want to order:%0AProduct: ${encodeURIComponent(product)}%0APrice: ₹${price}%0A%0APlease share available sizes, colors and delivery details.`;
  window.open(`https://wa.me/918619690803?text=${msg}`, '_blank');
}
