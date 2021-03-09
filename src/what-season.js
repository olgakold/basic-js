const CustomError = require("../extensions/custom-error");

module.exports = function getSeason (date ) {
  
  if (date === undefined){
    return 'Unable to determine the time of year!'
  }
  
  else if (typeof(date) != 'object'){
    return null
  } 

    
  else {   
     var month = date.getMonth()
   switch (month){
     case 0:
     return 'winter';
     break;
     case 1:
     return 'winter';
     break;
     case 2:
     return 'spring';
     break;    
     case 3:
     return 'spring';
     break; 
     case 4:
     return 'spring';
     break;
     case 5:
     return 'summer';
     break;
     case 6:
     return 'summer';
     break;
     case 7:
     return 'summer';
     break;
     case 8:
     return 'autumn';
     break;
     case 9:
     return 'autumn';
     break;
     case 10:
     return 'autumn';
     break;
     case 11:
     return 'winter';
     break;

   }

  }

};