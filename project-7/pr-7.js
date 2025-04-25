// 1. Create a School class and create a student and faculty method. 
// The Student method gives the student name, email and contact number as arguments 
// and prints all details the same as faculty using class & object.

// class School 
// {
//     student(name , email , contactNumber) 
//     {
//         console.log("STUDENT DETAILS:");
//         console.log(`NAME: ${name}`);
//         console.log(`EMAIL: ${email}`);
//         console.log(`CONTACT NUMBER: ${contactNumber}`);
//     }

//     faculty(name , email , contactNumber) 
//     {
//         console.log("FACULTY DETAILS:");
//         console.log(`NAME: ${name}`);
//         console.log(`EMAIL: ${email}`);
//         console.log(`CONTACT NUMBER: ${contactNumber}`);
//     }
// }

// const SchoolInformation = new School();
// SchoolInformation.student("PRUTHVIRAJ SOLANKI" , "pruthvirajsolanki125@gmail.com" , "6355802300");
// SchoolInformation.faculty("GIRISH DON😎" , "rw3.girish.gk@gmail.com" , "9898771458");



// 2. Create a Person class with an argument name and age. 
// Create an Employee class that prints out details of the Person class. 

// class Person 
// {
//     constructor(name , age) 
//     {
//         this.name = name;
//         this.age = age;
//     }
// }

// class Employee extends Person 
// {
//     PersonDetails() 
//     {
//         console.log("EMPLOYEE DETAILS:");
//         console.log(`NAME: ${this.name}`);
//         console.log(`AGE: ${this.age}`);
//     }
// }

// const emp = new Employee("PRUTHVIRAJ", 19);
// emp.PersonDetails();



// 3. Employee class creates a constructor called print a simple message.

// class EmployeeSimpleMessage 
// {
//     constructor() 
//     {
//         console.log("WELCOME TO PRUTHVI WORLD !!!");
//     }
// }

// const empPruthvi = new EmployeeSimpleMessage();



// 4. Create a Shape class and create a rectangle and circle method 
// to find the circle area (3.14*r*r) and rectangle area (width*height) using arguments. 

class Shape 
{
    AreaOf_Circle(radius) 
    {
        const area = 3.14 * radius * radius;
        console.log(`AREA OF CIRCLE : ${area}`);
    }

    AreaOf_Rectangle(length , width) 
    {
        const area = length * width;
        console.log(`AREA OF RECTANGLE : ${area}`);
    }
}

const ShapeMethod = new Shape();
ShapeMethod.AreaOf_Circle(5); 
ShapeMethod.AreaOf_Rectangle(5 , 10); 