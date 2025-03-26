//1. wap to enter electricity unit and calculate amount and pay.

let unitsUsed = 500 , totalBill , surcharge , finalAmount;

if(unitsUsed <= 50) 
{
    totalBill = unitsUsed * 1;
    console.log("THE ELECTRICITY BILL IS : ", totalBill , "Rs");
}
else if(unitsUsed <= 150) 
{
    totalBill = ((unitsUsed - 50) * 2) + (50 * 1);
    console.log("THE ELECTRICITY BILL IS : ", totalBill , "Rs");
}
else if(unitsUsed <= 250) 
{
    totalBill = ((unitsUsed - 150) * 3) + (100 * 2) + (50 * 1);
    surcharge = totalBill * 0.2;
    finalAmount = totalBill + surcharge;

    console.log("THE ELECTRICITY BILL IS : ", totalBill , "Rs");
    console.log("SURCHARGE : ", surcharge , "Rs");
    console.log("THE FINAL AMOUNT TO PAY IS : ", finalAmount , "Rs");
}
else 
{
    totalBill = ((unitsUsed - 250) * 4) + (100 * 3) + (100 * 2) + (50 * 1);
    surcharge = totalBill * 0.2;
    finalAmount = totalBill + surcharge;

    console.log("THE ELECTRICITY BILL IS : ", totalBill , "Rs");
    console.log("SURCHARGE IS: ", surcharge , "Rs");
    console.log("THE FINAL AMOUNT TO PAY IS : ", finalAmount , "Rs");
}
// output : THE ELECTRICITY BILL IS : 1550rs , SURCHARGE IS: 310rs , THE FINAL AMOUNT TO PAY IS : 1860rs.


//2. wap to print season according user(using switch case).

let monthNumber = prompt("ENTER THE SEASON NUMBER (1-12) : ");
console.log("ENTERED YOUR MONTH : ", monthNumber);

switch(monthNumber) 
{
    case "1":
    case "2":
    case "3":
    case "4":
        console.log("WINTER");
        break;
    case "5":
    case "6":
    case "7":
    case "8":
        console.log("MONSOON");
        break;
    case "9":
    case "10":
    case "11":
    case "12":
        console.log("SUMMER");
        break;

    default:
        console.log("YOUR SEASON IS INVALID!!");
        break;
}
// output : 5 : MONSOON.

//3. wap to find rate based on year and calculate total intrest(using nested if).

// let principalAmount = prompt("ENTER THE PRINCIPLE AMOUNT : ");
// let no_ofYears = prompt("ENTER THE NUMBER OF YEARS : ");
// let interestRate , totalInterest;

// if(no_ofYears > 3 && no_ofYears <= 5) 
// {
//     interestRate = 3;
// }
// else if(no_ofYears > 5 && no_ofYears <= 8) 
// {
//     interestRate = 5;
// }
// else if(no_ofYears > 8 && no_ofYears <= 12) 
// {
//     interestRate = 12;
// }
// else 
// {
//     interestRate = 15;
// }

// totalInterest = (principalAmount * interestRate * no_ofYears) / 100;
// console.log("THE TOTAL INTREST IS : ", totalInterest , "Rs");
// output : principal = 10000 ; time : 4 , rate : 3% == 1200.
 

//4. wap to check voting eligiblity.

let age = prompt("ENTER YOUR AGE: ");
age = Number(age);

if(age >= 18)
{
    console.log("YOU ARE ELIGIBLE TO VOTE👍");
}
else if(age < 18 && age >= 0)
{
    console.log("YOU ARE NOT ELIGIBLE TO VOTE👎");
}
else
{
    console.log("PLEASE! ENTER A VALID NUMBER🫥");
}
// output : 18, IT IS ELIGIBLE FOR VOTING.


//5. wap to classify age groups.

let enterAge = prompt("ENTER YOUR AGE: ")

if(enterAge <= 1) 
{
    console.log("YOU ARE CLASSIFIED AS INFANTS.");
}
else if(enterAge <= 4)
{
    console.log("YOU ARE CLASSIFIED AS TODDLERS.")
}
else if(enterAge <= 12)
{
    console.log("YOU ARE CLASSIFIED AS CHILDREN.")
}
else if(enterAge <= 19)
{
    console.log("YOU ARE CLASSIFIED AS TEENAGERS.")
}
else if(enterAge <= 39)
{
    console.log("YOU ARE CLASSIFIED AS YOUNG ADULT.")
}  
else if(enterAge <= 59)
{
    console.log("YOU ARE CLASSIFIED AS MIDDLE-AGED ADULTS.")
}
else if(enterAge >= 60)
{
    console.log("YOU ARE CLASSIFIED AS SENIOR CITIZEN.")
}
else 
{
    console.log("INVALID AGE.")
}
// output : 19, YOU ARE CLASSIFIED AS TEENAGERS.
    
