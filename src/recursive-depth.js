const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr ) {

     let numbersArray
     for (let i=0; i<arr.length; i++){
       
       if (Array.isArray(arr[i])){

        numbersArray +=calculateDepth (arr[i])
       }
       else{
         numbersArray = 1
       }
      
     }

     return numbersArray
  }
};