//1. Wap to print expected Output using the following array.

// Sample array : myColor = ["Red", "Green", "White", "Black"];
// Red+Green+White+Black
// Red,Green,White
// Red
// Green,White
// Red,Green,White,Black,orange


// let random = ["Red", "Green", "White", "Black"];
// console.log(random.join(" , "));
// console.log(random.join(" + "));
// console.log(random.slice(0, 3).join(",  "));
// console.log(random.slice(0, 1).join("")); 
// console.log(random.slice(2, 4).join(" , ")); 
// console.log(random.slice().join(" , ") + " , Orange"); 


//2. Wap to get the sum of all array elements using for loop and foreach loop.

// let elements = [5,15,25,35,45,55,65,75,85,95];

// let length = elements.length;

// let sum = 0 , i;

// for(i = 0 ; i < length ; i++)
// {
//     sum += elements[i];
// }

// console.log("THE SUM OF ALL ARRAY ELEMENTS : ",sum);

// output : THE SUM OF ALL ARRAY ELEMENTS : 500.


//3. wap to print max and min value of given array. 

// let value = [5,15,25,35,45,55,65,75,85,95];
// let max = value[0]; 

// for(let i = 1 ; i < value.length ; i++) 
// {
//     if(value[i] > max) 
//     {
//         max = value[i]; 
//     }
// }

// console.log("MAXIMUN AND MINIMUN VALUE OF ARRAY IS :", max);

// output : MAXIMUN AND MINIMUN VALUE OF ARRAY IS : 95.

// let min = value[0]; 

// for(let i = 1 ; i < value.length ; i++) 
// {
//     if (value[i] < min) 
//     {
//         min = value[i]; 
//     }
// }     

// console.log("The minimum value in the array is:", min);

// output : MAXIMUN AND MINIMUN VALUE OF ARRAY IS : 5.


//4. Wap to convert all array elements into ASCII values.

// let array = ["p","d","r","#"];

// for(let i = 0 ; i < array.length ; i++) 
// {
//   console.log("ASCII value of " + array[i] + " is " + array[i].charCodeAt(0));
// }

// output : 
// ASCII value of p is 97
// ASCII value of d is 103
// ASCII value of r is 104
// ASCII value of s is 36


//5. wap to remove negative using the filter array function.

// let numbers = [-23,-20,-17,-12,-5,0,1,5,12,19,20];

// let positiveNumbers = numbers.filter((number) => number >= 0);
// console.log(positiveNumbers);

// output: [0, 1, 5, 12, 19, 20].


//6. Wap using array map() method and return the square of the array element array = [2, 5, 6, 3, 8, 9];

// let squareof_element = [2,5,6,3,8,9];

// let squareArray = squareof_element.map((number) => number * number);

// console.log(squareArray);

// output: [4, 25, 36, 9, 64, 81].


//7. Wap for sorting an array in ascending descending.

// numbers = [23,20,17,12,5,0,1,5,12,19,20];
// myColor = ["Red", "Green", "White", "Black"];

// let numbers = [12,43,45,65,67,87,78,45,23,3,7,4];
// let myColor = ["Red", "Green", "White", "Black","Orange","Pink","Blue"];

// let ascendingNumbers = numbers.sort((a, b) => a - b);
// console.log(ascendingNumbers);

// let descendingNumbers = numbers.sort((a, b) => b - a);
// console.log(descendingNumbers);

// let ascendingColor = myColor.sort();
// console.log(ascendingColor);

// let descendingColor = myColor.sort().reverse();
// console.log(descendingColor);

// output: [3, 4, 7, 12, 23, 43, 45, 45, 65, 67, 78, 87]
// output: [87, 78, 67, 65, 45, 45, 43, 23, 12, 7, 4, 3]

// output: ['Black', 'Blue', 'Green', 'Orange', 'Pink', 'Red', 'White']
// output: ['White', 'Red', 'Pink', 'Orange', 'Green', 'Blue', 'Black']


//8. Wap which filters out any string which is less than 8 characters.

// let words = ['Python','Javascript','Go','Java','PHP','Ruby'];

// let filterWords = words.filter((word) => word.length <= 8);
// console.log(filterWords);

// output: ['Python','Go','Java','PHP','Ruby'] 


//9. wap to print expected output for the following string.

// let x = "oxoxoxox";
// let output = x.replace(/x/g, "X");
// console.log(output);

// let y = "A New Java Book";
// let p = y.toUpperCase().split(" ").join(" ");
// console.log(p);

// output: x = "oXoXoXoX"
// output: "A NEW JAVA BOOK"


// 10. write a JavaScript program for array reverse.

// let array = [20,21,22,23,24,25];

// let reverseArray = array.reverse();
// console.log(reverseArray);

// output: [25, 24, 23, 22, 21, 20]


//11. write a JavaScript program to check if a value is found or not?

// let array = [1, 2, 3, 4, 5 ,6]; 

// let checkValue = array.includes(6);
// console.log(checkValue);

// output: true


//12. write a JavaScript program to print your name and write the number of total characters.


let name = "PRUTHVIRAJ SOLANKI";

let totalCharacter = name.length;
console.log(totalCharacter);

// output: 18.


//13. write a JavaScript program given this output using replace concept.
// Input : - "I often take a walk with my dog in the evening. His dog follows him everywhere. I don't feed my dog in the morning";
// Output:- "I often take a walk with my cat in the evening. His cat follows him everywhere. I don't feed my cat in the morning"

// let input = "I often take a walk with my dog in the evening. His dog follows him everywhere. I don't feed my dog in the morning";

// let output = input.replace(/dog/g, "cat");
// console.log(output);

// output: "I often take a walk with my cat in the evening. His cat follows him everywhere. I don't feed my cat in the morning"


//14. write a JavaScript program convert string to array.
// Input :- "Hire the top 1% freelance developers";
// Output :- ["Hire", "the", "top", "1%"]

// let input = "Hire the top 1% freelance developers";

// let output = input.split(" ");
// console.log(output);

// output: ["Hire", "the", "top", "1%", "freelance", "developers"]


//15. write a JavaScript program to convert an array to string.
// Input:- ['5', 32, 'Daniel'];
// Output: 5,32,Daniel

// let input = ['5', 32, 'Daniel','pruthviraj'];

// let output = input.toString();
// console.log(output);

// output: 5,32,Daniel,pruthviraj.

  
