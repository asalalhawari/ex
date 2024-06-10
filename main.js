//task1
localStorage.setItem("names", "Hello, World");
console.log(localStorage.getItem("names"));
 
// task2

localStorage.setItem("names", "123");
console.log(localStorage.getItem("names"));
 
//task3
localStorage.setItem("key",JSON.stringify(true)); 
console.log(JSON.parse( localStorage.getItem("key")));

//task4
localStorage.setItem("names", "123");
console.log(localStorage.getItem("names"));
localStorage.removeItem("names");
//task5
localStorage.clear();
//task6
// ..
//task7
localStorage.setItem("names",JSON.stringify([1,2,3])); 
console.log(JSON.parse(localStorage.getItem("names")));
//task8
let task = {v: "v 1", name: "nam", number: 123};
localStorage.setItem("asal", JSON.stringify(task)); 
console.log(JSON.parse(localStorage.getItem("asal")));
//task 9
localStorage.setItem("asal", "hawari"); 
localStorage.setItem("asal9", JSON.stringify(22)); 
localStorage.setItem("asal6", JSON.stringify([6,9,66,99])); 
console.log(localStorage.getItem("asal")); 
console.log(JSON.parse(localStorage.getItem("asal9"))); 
console.log(JSON.parse(localStorage.getItem("asal6")));
 //task 10
 sessionStorage.setItem("asal10", "Hello World"); 
 console.log(sessionStorage.getItem("asal10"));






