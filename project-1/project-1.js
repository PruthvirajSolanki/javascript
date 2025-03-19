//1. wap to find area of triangle.

let breath = 42 , height = 25 , area_oftriangle;

area_oftriangle = 1 / 2 * (breath * height);
console.log("AREA OF TRIANGLE IS : ",area_oftriangle);
// output : AREA OF TRIANGLE IS 525.

// 2. wap to convert temperatures from celsius,fahrenheit.

let celsius = 20 , fahrenheit;

fahrenheit = celsius * (9 / 5) + 32;
console.log("TEMPERATURE OF FAHRENHEIT : ",fahrenheit);
// output : TEMPERATURE OF FAHRENHEIT IS 68.

// 3. wap to find area of rectangle.

let length = 50 , width = 15 , area_ofrectangle;

area_ofrectangle = length * width;
console.log("AREA OF RECTANGLE IS : ",area_ofrectangle);
// output : AREA OF RECTANGLE IS 750.

// 4. wap to find area of circle.

let pi = 3.14, r = 2 , area_ofcircle;

area_ofcircle = pi * (r**2);
console.log("AREA OF CIRCLE IS : ",area_ofcircle);
// output : AREA OF CIRCLE IS 12.56.

// 5. wap to convert feet to inches.

let feet = 5 , inches;

inches = feet * 12;
console.log("INCHES IS : ",inches);
// output : INCHES IS 60.

// 6. wap to calculate given formulas.

// (i) a2 - b2 = (a - b)(a + b)
let a = 5 , b = 3;

formula1 = (a * a) - (b * b) === (a - b) * (a + b);
console.log(formula1);
// output : ANSWER OF FORMULA1 IS TRUE.

// (ii) (a-b)2 = a2 - 2ab + b2
let a = 5 , b = 3;

formula2 = (a - b) * (a - b) === (a * a) - 2 * (a * b) + (b * b);
console.log(formula2);
output : ANSWER OF FORMULA2 IS TRUE.

// (iii) (a+b+c)2 = a2 + b2 + c2 + 2ab + 2ac + 2bc
let a = 5 , b = 3 , c = 2;

formula3 = (a + b+ c) * (a + b+ c) === (a * a) + (b * b) + (c * c) + 2 * (a * b) + 2 * (a * c) + 2 * (b * c);
console.log(formula3);
output : ANSWER OF FORMULA3 IS TRUE.

// (iv) (a-b-c)2 = a2 + b2 + c2 - 2ab - 2ac + 2bc
let a = 5 , b = 3 , c = 2;

formula4 = (a - b - c) * (a - b - c) === (a * a) + (b * b) + (c * c) - 2 * (a * b) - 2 * (a * c) + 2 * (b * c);
console.log(formula4);
// output : ANSWER OF FORMULA4 IS TRUE.

// (v) (a-b)3 = a3 - 3a2b + 3ab2 - b3
let a = 5 , b = 3;

formula5 = (a - b) * (a - b) * (a - b) === (a) * (a) *(a) - 3 * (a) * (a) * (b) + 3 * (a * b) * (a * b) - (b) * (b) * (b);
console.log(formula5);
// output : ANSWER OF FORMULA5 IS FALSE.





