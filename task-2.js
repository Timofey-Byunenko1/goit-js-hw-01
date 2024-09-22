function getShippingMessage(country, price, deliveryFee) {
   const coint =  "Shipping to ${country} will cost <totalPrice> credits";
   const totalPrice = price + deliveryFee;
   return totalPrice;
}


console.log(getShippingMessage("Australia", 120, 50));