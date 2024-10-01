function checkForSpam(message) {
    const lowerCaseMessage = message.toLowerCase();
    
    
    if (lowerCaseMessage.includes("spam") || lowerCaseMessage.includes("sale")) {
      return true; 
    } else {
      return false; 
    }
  }
  
  console.log(checkForSpam("Latest technology news")); // false

  