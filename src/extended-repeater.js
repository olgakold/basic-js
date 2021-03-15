const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options ) {
  if (!('addition' in options)) {
    options.addition = ''
    
}
if (!('separator' in options)){
    options.separator = '+'
}

if (!('additionSeparator' in options)){
  options.additionSeparator = '|'
}

let str2 = (options.addition+options.additionSeparator).repeat(options['additionRepeatTimes']-1)+options.addition
return (str+str2+options.separator).repeat(options.repeatTimes-1)+str+str2
};
 