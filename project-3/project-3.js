//1. wap to display multiplication table of given integer using while loop.

// let n = prompt("ENTER ANY NUMBER : ");
// let i = 1; 

// while(i <= 10) 
// {
//     console.log(n + " x " + i + " = " + (n * i)); 
//     i++; 
// }
// output : 5.
// 5 x 1 = 5
// 5 x 2 = 10
// 5 x 3 = 15 
// 5 x 4 = 20 
// 5 x 5 = 25 
// 5 x 6 = 30 
// 5 x 7 = 35 
// 5 x 8 = 40 
// 5 x 9 = 45 
// 5 x 10 = 50


//2. wap to calculate factorial of given number using while loop.

// let n = prompt("ENTER ANY NUMBER : ");
// let fact = 1;

// while(n >= 1)
// {
//     fact = fact * n;
//     n--;
// }
// console.log("YOUR FACTORIAL IS : ",fact);
// output : YOUR FACTORIAL IS : 720.

//3. wap to find armstrong number list using do-while loop.

// let n = prompt("ENTER ANY VALUE : ");
// let original = n;
// let reverse = 0;

// do 
// {
//     let rem = n % 10;
//     reverse = reverse + rem ** 3;
//     n = Math.floor(n / 10);
// } 
// while(n > 0);

// if(original == reverse) 
// {
//     console.log("NUMBER IS ARMSTRONG👍");
// } 
// else 
// {
//     console.log("NUMBER IS NOT ARMSTRONG👎");
// }
// output : 555 NUMBER IS NOT ARMSTRONG👎


// 4. wap to find palindrome number list using while loop.

// let n = prompt("ENTER ANY NUMBER : ");
// let original = n;
// let reverse = 0;

// while(n > 0)
// {
//     let rem = n % 10
//     reverse = (reverse * 10) + rem;
//     n = Math.floor(n / 10)
// }

// if(original ==reverse)
// {
//     console.log("NUMBER IS PALINDROME👍");
// }
// else 
// {
//     console.log("NUMBER IS NOT PALINDROME👎");
// }
// output : 535 NUMBER IS PALINDROME👍


//5. wap to calulate fibonacci series using while loop.

// let a = 1 , b = 1 , c;
// console.log(a);
// console.log(b);

// let i = 1;
// while(i <= 15) 
// {
//     c = a + b;
//     console.log(c);
//     a = b;
//     b = c;
//     i++;
// }
// output : 1 , 1 , 2 , 3 , 5 , 8 , 13 , 21 , 34 , 55 , 89 , 144 , 233 , 377 , 610 , 987 , 1597.

//6. wap tp add all integers between 0 to 30 using do-while loop.

// let sum = 0 , i;

// for(i = 1; i <= 30; i++)
// {
//     sum = sum + i;
// }
// console.log("YOUR 0 TO 30 SUM IS : ",sum);
// output : YOUR 0 TO 30 SUM IS : 465.


//7. wap to which iterates from 1 to 100 using do-while loop.

// let number = 1;

// do 
// {
//     if(number % 3 === 0 && number % 5 === 0) 
//     {
//         console.log("FizzBuzz");
//     } 
//     else if(number % 3 === 0) 
//     {
//         console.log("Fizz");
//     } 
//     else if(number % 5 === 0) 
//     {
//         console.log("Buzz");
//     } 
//     else 
//     {
//         console.log(number);
//     }
//     number++;
// } 
// while(number <= 100);
// output : 1 , 2 , Fizz , 4 , Buzz ,.................., 97 , 98 , Fizz , Buzz.


//8. wap that display 1-2-3-4-5-6-7-8-9-10 on one line using for loop.

// let pattern = "";

// for(let i = 1; i <= 10; i++)
// {
//     pattern += i;
//     if(i < 10)
//     {
//         pattern += "-";
//     }
// }
// console.log(pattern);
// output : 1-2-3-4-5-6-7-8-9-10.


//9.wap that display 1+4+9+16+...+100 = 385 using for loop.

// let sum = 0;
// let result = "";

// for(let i = 1; i <= 10; i++) 
// {
//     sum += i * i;
//     result += (i * i) + (i < 10 ? "+" : "");
// }

// console.log(result + " = " + sum);
// output : 1+4+9+16+25+36+49+64+81+100 = 385.


//10. wap to print pattern using nested for loop.

// let i , j;

// for( i = 5; i >= 1; i--) 
// {
//     let pattern = "";
//     for( j = 5; j >= i; j--) 
//     {
//         pattern += j + " ";
//     }
//     console.log(pattern);
// }
// output : 5 
//          5 4 
//          5 4 3 
//          5 4 3 2 
//          5 4 3 2 1 


//11. wap to print pattern using nested for loop. 

// let num = 1;

// for(let i = 1; i <= 5; i++) 
// { 
//     let pattern = "";
//     for (let j = 1; j <= i; j++) 
//     {
//         pattern += num + " ";
//         num++; 
//     }
//     console.log(pattern); 
// }
// output : 1
//          2 3  
//          4 5 6  
//          7 8 9 10  
//          11 12 13 14 15 
