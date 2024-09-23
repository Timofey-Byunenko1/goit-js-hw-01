function getElementWidth(content, padding, border) {
    const pading = Number.parseFloat(content) + Number.parseFloat(padding) * 2 + Number.parseFloat(border) * 2;
     
 return pading;
 }
 
 console.log(getElementWidth('50px', '8px', '4px'));