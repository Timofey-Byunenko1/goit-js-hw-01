function makeTransaction(quantity, pricePerDroid, customerCredits) {
const totalPrice =  quantity *  pricePerDroid;

if ( totalPrice > customerCredits) {
  return  `Insufficient funds!`
} else {
  return `You ordered ${quantity} droids worth ${totalPrice} credits!`
}


}
console.log(makeTransaction(5, 3000, 23000)); // "You ordered 5 droids worth 15000 credits!"