let name="khushal agarwal";                                             //usage of let keyword 
const age=18;                                                           //usage of const keyword
var hashobbies=true;                                                    //usage of var keyword 
name="Khushal Agarwal";                                                 //trying to see if name changes after using let keyword 
console.log(name);
function summarizeuser(username,userage,userhashobbies)                 //a simple JS function implementation
{
    return ('UserName is-' + username+' Userage is- '+userage+' Userhashobbies-'+userhashobbies);
}
const summerize=(username,userage,userhashobbies) =>{
    return ('UserName is-' + username+' Userage is- '+userage+' Userhashobbies-'+userhashobbies);  //a arrow function
};
const add = (a,b) => (a+b);                                             //a simplified version of arrow function with two arguments 
const multiply= b => b*4;                                               //a arrow function with one argument
console.log(summarizeuser(name,age,hashobbies));  
console.log(summerize(name,age,hashobbies));
console.log(add(2,age));
console.log(multiply(age));
