//1. wap to print greeting message using argument no return type function and call tghe function without arguement at that time print message good morning.

let n;
function greeting(p)
{
    if(p == null)
    {
        console.log("GOOD MORNING☀️");
    }
    else
    {
        console.log("DEAR! GIRISH SIR🙏");
    }
}
greeting();
// output : 


//2. wap to find circle area using return type with arguement function.

// let pi = 3.14;
// function areaof_circle(r)
// {

//     areaof_circle = pi * r * r;
//     return console.log("AREA OF CIRCLE IS : ",areaof_circle); 

// }
// areaof_circle(5);
// output : AREA OF CIRCLE IS :  78.5


//3. wap to find triangle area using return type with arguement function.

// let b , h;
// function areaof_triangle(b , h)
// {

//     areaof_triangle = (b * h) / 2;
//     return console.log("AREA OF TRIANGLE IS : ",areaof_triangle); 

// }
// areaof_triangle(2,5);
// output : AREA OF TRIANGLE IS :  5


//4. wap to find rectangle area using return type with arguement function.

// let l , w;
// function areaof_rectangle(l , w)
// {

//     areaof_rectangle = l * w;
//     return console.log("AREA OF RECTANGLE IS : ",areaof_rectangle); 

// }
// areaof_rectangle(9,9);
// output : AREA OF RECTANGLE IS :  81


//5. wap to find ans of ((b*b)(4*a*c))/(2*a) using return type with argument function.

// let a , b , c;
// function formula_1(a , b , c)
// {
//     formula_1 = ((b * b) * (4 * a * c)) / (2 * a);
//     return console.log("ANS OF FORMULA-1 IS : ",formula_1);
// }

// formula_1(5,5,5);
// output : 


//6. wap to find ans of (a*a)+(2*a*b)+(b*b) using return type with argument function.

// let a , b;
// function formula_2(a , b)
// {
//     formula_2 = (a * a) + (2 * a * b) + (b * b);
//     return console.log("ANS OF FORMULA-2 IS : ",formula_2);
// }

// formula_2(3,3);
// output : ANS OF FORMULA-2 IS :  36.


//7. wap to convert fahrenheit to celsius (c = (f-32)/1.8) using return type with argument function.

// function fahrenheit_to_celsius(fahrenheit) 
// {
//         let fahrenheit_to_celsius = (fahrenheit - 32) / 1.8;
//        return console.log("FAHRENHEIT TO CELSIUS ANS IS :",fahrenheit_to_celsius);
// }
    
// fahrenheit_to_celsius(99);
// output : FAHRENHEIT TO CELSIUS ANS IS : 37.22222222222222


//8. wap to convert celsius to fahrenheit (f = (c*1.8)+32) using return type with argument function.

// function celsius_to_fahrenheit(celsius) 
// {
//     let celsius_to_fahrenheit = (celsius * 1.8) + 32;
//     return console.log("CELSIUS TO FAHRENHEIT ANS IS :",celsius_to_fahrenheit);
// }

// celsius_to_fahrenheit(25);
// output : CELSIUS TO FAHRENHEIT ANS IS : 77.


//9. wap to find num is odd or even using an arguement with no return type.

// function odd_or_even(number)
// {
//     if(number == 0)
//         {
//             console.log("THIS NUMBER IS ZERO.");
//         }
//     else if(number % 2 == 0)
//         {
//             console.log("THIS NUMBER IS EVEN.");
//         }
//     else
//         {
//             console.log("THIS NUMBER IS ODD.");
//         }
// }
    
// odd_or_even(1005);
// output : THIS NUMBER IS ODD.


//10. wap to swap a value without third variable using with arguement no return type.

// let s , p;
// function swapping(s , p) 
// {
//     s = s + p;
//     p = s - p;
//     s = s - p;

//     console.log("S is :",s)
//     console.log("P is :",p)
// }

// swapping(5,10);
// output : S is : 10 
//          P is : 5