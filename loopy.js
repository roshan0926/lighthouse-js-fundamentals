/*for (let x = 100; x <= 200; x++){
  if (x % 3 === 0){
    console.log("Loopy")
  }
  else if(x % 4 === 0){
    console.log("Lighthouse")
  }
  else if(x % 3 === 0 && x % 4 === 0){
    console.log("LoopyLighthouse")
  }

  else{
    console.log(x)
}
}

//start of next section
const amounts = [61.00, 52.25, 112.99, 5.00]; 

const total = 0;
for (let i = 0; i < amounts.length; i++) {
  total += amounts[i];
}
console.log('Order total is: ', total); 
*/
/*
let total = 0;
for (let amount of amounts) {
  total += amount;
}
console.log('Order total is: ', total);
*/

// declares the sayHello function
function sayHello() {
  var message = "Hello!"
  return message; // returns value instead of printing it
}

console.log(sayHello());