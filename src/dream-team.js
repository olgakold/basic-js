const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let name=[] 
   if (members === undefined || members === null){
     return false
   }
   else {  
   for (let i=0; i<members.length; i++){       
     if (typeof members[i] === 'string'){
       if (members[i].indexOf(' ') != -1){
         members[i] = members[i].trim()
         a = members[i].lastIndexOf(' ')
         name.push(members[i].slice(0, 1).toLocaleUpperCase() + members.slice (a, 1))
       
       }
       else {
         name.push(members[i].slice(0, 1).toLocaleUpperCase())             
       }
     
     }  
 
   }
   
   return name.sort().join('')
   }
 };