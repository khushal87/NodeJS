const person={
    name:"khushal agarwal",
    age:18,
    hashobbies:true,
    namedefined(username)
    {
        console.log("Hi i am " + username);
    },
    agedefined(userage) {
        console.log("Hi my age is "+userage);
    }
};
const printname=({name,age}) =>{
    console.log(name);              //destructuring object
    console.log(age);
}
printname(person);





const {name,age}=person;
console.log(name,age);



const hobbies=['sports','music','singing'];
const [hobby1,hobby2]=hobbies;                                  //destructuring array
console.log(hobby1,hobby2);   //can be logged in array or objects
