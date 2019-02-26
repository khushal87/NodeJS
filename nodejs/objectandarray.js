//OBJECTS
var name="Max";
var age=18;
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
console.log(person.namedefined(name));
console.log(person.agedefined(age));






//ARRAYS 
const hobbies=['sports','music','singing'];
for(let hobby of hobbies)
{                                                                       //accessing araay elements
    console.log(hobby);
}
console.log(hobbies.map(hobby => 'Hobby:'+hobby));
