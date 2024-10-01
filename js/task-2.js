function formatMessage(message, maxLength) {

    if (message.length <= maxLength) {
      return message; 
    } else {

      return message.slice(0, maxLength) + "...";
    }
  }
  
  console.log(formatMessage("Hello, world!", 10));  