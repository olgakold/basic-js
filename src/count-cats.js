const CustomError = require("../extensions/custom-error");

module.exports = function countCats( matrix ) {
  const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  
    let catsNumber = 0;
    for (let i=0; i<matrix.length; i++){
        matrix[i].map(a => a === '^^' ? catsNumber++ : '' )
    }
    return catsNumber

};
};
