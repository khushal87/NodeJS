
//spread operator in array
const numbers=[1,2,3,4];
const coppiednumber=[...numbers]; //spread operator is used here to copy the elements of numbers array to coppiedarray
console.log(coppiednumber);


//spread operator in object
const coppiedperson={...person}; //spread operator is used here to copy the elements of numbers array to coppiedarray
console.log(coppiedperson);

const toarray=(arg1,arg2,arg3) => {
    return [arg1,arg2,arg3];
}                                                   //this is not flexible
console.log(toarray(1,2,3));



const toarray1=(...args) => {
    return args;
}                                                   //this is flexible and so rest operator is used in functions when merging multiple arguments in an array or object
console.log(toarray1(1,2,3,4,5));
