function greetUser(greetingPrefix, userName = "user") {
  //console.log(greetingPrefix + " " + userName + "!");
  console.log(`${greetingPrefix} ${userName}!`)//Template Literals 
}

greetUser("Hi", "Tom");
greetUser("Hello");

function sumUp(...numbers) {
  //rest parameters = (...) put before a value to turn it into an array
  //these dots make it so that you dont need to put everything into an array[] in the console.log(sumUp([1, 2, 5, 10, 15]));
  let result = 0; //(...) makes the entered numbers into an array for you.
  // (...) does not want an array. if you insert an array when calling the function then it wont work result = 01,2,5,10,15
  for (const number of numbers) {
    result += number; //result = result + number
  }

  return result;
}

console.log(sumUp(1, 2, 5, 10, 15));

function sumUp2(...numbers) {
  let result = 0;
  for (const number of numbers) {
    result += number;
  }

  return result;
}

const inputNumbers = [1, 2, 5, 10, 15];
//Spread parameters (...) put before an array
console.log(sumUp2(...inputNumbers)); // putting the (...) here converts the array into a list of numbers(items)

console.log(sumUp2)

const personObjest = {
    name: 'Tom',
    age: 36
};

 