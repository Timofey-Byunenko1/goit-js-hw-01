function getElementWidth(content, padding, border) {
    const pading = Number.parseFLoat(content) + Number.parseFLoat(padding) * 2 + Number.parseFLoat(border) * 2;
     
 return pading;
 }
 
 console.log(getElementWidth('50px', '8px', '4px'));