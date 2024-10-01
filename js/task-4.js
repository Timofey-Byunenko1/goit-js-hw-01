function getShippingCost(country) {
  let price;

  const normalizedCountry = country.toLowerCase();

  switch (normalizedCountry) {
    case "china":
      price = 100;
      return `Shipping to China will cost ${price} credits`;
    case "chile":
      price = 250;
      return `Shipping to Chile will cost ${price} credits`;
    case "australia":
      price = 170;
      return `Shipping to Australia will cost ${price} credits`;

    case "jamaica":
      price = 120;
      return `Shipping to Jamaica will cost ${price} credits`;

    default:
      return "Sorry, there is no delivery to your country";
  }
}


console.log(getShippingCost("China")); // 

