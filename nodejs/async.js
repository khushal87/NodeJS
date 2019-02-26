const fetchData= () =>
{
    const promise= new Promise((resolve,reject)=>
    {
    setTimeout(()=>{resolve('Done!');
    },1500);
    });
    return promise;
};
setTimeout(() => {                                                  //asynchronous code
    console.log("Timer is done.");
    fetchData()
    .then(text =>{
        console.log(text);
        return fetchData();
    })
    .then(text2 =>{
        console.log(text2);
    });
},3000);


console.log("Hi!");                                  //synchronous code

//JS doesnot restrict the faster code(synchronous code) although async code is defined before 




const name="Max plank";
const age=18;
console.log(`My name is ${name} and I am ${age} years old.`);