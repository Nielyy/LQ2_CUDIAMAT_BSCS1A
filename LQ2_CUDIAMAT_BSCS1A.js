// I. code transformations
// 1.A.
let age = parseInt(prompt("Enter your age: ")); // this will ask the user age.
let genAverage = parseInt(prompt("Enter your genAverage: ")); // this will ask the user grade.
let collegeBSCS = (age >= 18 && genAverage >= 83) ? "You may enter College, under BSCS Program" /*this will be the output if the condition is true*/: "Both conditions may have not met and not allowed to enroll";//this will be the output if the condition is false and the collegeBSCS is a variable holds the value of the answer
console.log(collegeBSCS);

// 2.B
let subject = prompt("Enter your Subject: ") //asking the subject of the user.
let grade = parseInt(prompt("Enter your grade: ")) //asking the user grade inthat subject.

let registrar = (subject === "DSA" && grade >= 80)/*1st Conditon*/ ?
   "You may enroll Application Development"/*this will be the output when the 1st Condition is true.*/ :
   (subject === "Math101" && grade <= 80)/*2nd Condition*/ ?
   "You may enroll Calculus" ://this will be the out put when the 2nd Conditon is true.
   "You have to enroll DSA and pass to enroll AD and Math101 and pass to enroll Calculus"; //this will be the output if the two conditions are false.
console.log(registrar);

// 2.A
let age2 = parseInt(prompt("Enter your age: ")); //this will ask the user age, and convert into integer
if(age2 >= 18)/*this is the condition*/{
   console.log("You may now Register as a Voter for Elections 2025"); //this will be the output when the condition is true.
}else{
   console.log("You are too young register as a voter for Elections 2025") //this will be the output when the condition is false.
}
// 2.B
let genAverage2 = parseInt(prompt("Enter your General Average: ")) //this will ask the user and convert it into integer.
if(genAverage2 >= 85)/*condition in if statement*/{
   console.log("You may enroll in all Course Programs"); //this will be the output if the if statement is true.
}else if(genAverage < 85 && genAverage > 82)/*condition in else if statement*/{
   console.log("You may enroll in any Course Program except in CTE, SCJE, CHS"); //this will be the output in else if statement is true.
}else{
   console.log("You may enroll in any Course Program except CTE, SCJE, CHS, CCS"); //this will be the output if there's no condition is true.
}
console.log(genAverage2) //to show the ouput in the if, else if, else statement.

// 3.A
let fname = "Jose Cruz"; // String to iterate over.
let i = 0; // Loop counter; initialized to 0.

// While loop equivalent of a for loop.  This approach is functionally identical to the for loop version.
while (fname.length > i) { // Loop condition: Continue as long as i is less than the length of fname.
  let c = 2 + i; // Calculation not directly used in this example, but included for completeness.
  let nLengthCounterTwo = fname.length - c; // Another calculation not directly used in this example.
  console.log(fname); // Print the name.
  console.log("Iterations Name was Printed: " + i); // Print the iteration number.
  i++; // Increment the counter for the next iteration.
}

// II
let uname = prompt("Register your username: "); //ask the user to input their Username
let pword = parseInt(prompt("Register your passcoe")); //ask the user to input their passcode
let re_pword = parseInt(prompt("Re-enter your passcode")); //ask the user to re enter their passcose.

if(pword === re_pword){
   alert("Congratulations You're Registered"); //window pop up to Congratulate the user for registering.
   let loginUname = prompt("Username: "); // Declare a variable to hold the username at login.
   if (loginUname === uname) { // Compare the registered username and entered username at login.
    let loginPword = prompt("Password: "); // If the username is correct, declare a variable to hold the entered password at login.
    (loginPword === pword) // Compare the registered password and entered password at login.
      ? alert("Welcome to DSA, " + uname) // Window pop-up to congratulate the user for successful login.
      : alert("Incorrect Password, Re-run the code!"); // Window pop-up to inform the user of the incorrect passcode.
  } else {
    alert("Incorrect Username, Re-run the code!"); // Window pop-up to inform the user of the incorrect username.
  }
} else {
  alert("Password does not Match, Re-run the code!"); // Window pop-up to inform the user that the registered password and re-entered password do not match.
}
// III.
// Get user inputs using prompt().  Error handling is minimal for brevity; a production system would need more robust input validation.

let name = prompt("Enter your name:");
let address = prompt("Enter your address:");
let age = parseInt(prompt("Enter your age:"));
let classRole = prompt("Enter your class role (Officer, Student, Teacher):").toLowerCase();
let course = prompt("Enter your course (BSCS, BSM, BAEL):").toUpperCase();


//Course-based conditional statement with fallback
if (course === "BSCS" || course === "BSM" || course === "BAEL") {
  //Class role-based conditional statement with fallback for each course.  Nested conditional statements handle class role segregation.
  if (course === "BSCS") {
    if (classRole === "officer" || classRole === "student" || classRole === "teacher") {
      //Loop to print the name, iterating 1/4 of the age.  Error handling for non-integer age.
      let iterations = Math.floor(age / 4) || 1; //Default to 1 iteration if age is not a number or is 0.
      for (let i = 0; i < iterations; i++) {
        console.log(name);
      }
    } else {
      console.log("Invalid class role for BSCS.  Please select Officer, Student, or Teacher.");
    }
  } else if (course === "BSM") {
    if (classRole === "officer" || classRole === "student" || classRole === "teacher") {
      let iterations = Math.floor(age / 4) || 1;
      for (let i = 0; i < iterations; i++) {
        console.log(name);
      }
    } else {
      console.log("Invalid class role for BSM. Please select Officer, Student, or Teacher.");
    }
  } else { //course === "BAEL"
    if (classRole === "officer" || classRole === "student" || classRole === "teacher") {
      let iterations = Math.floor(age / 4) || 1;
      for (let i = 0; i < iterations; i++) {
        console.log(name);
      }
    } else {
      console.log("Invalid class role for BAEL. Please select Officer, Student, or Teacher.");
    }
  }
} else {
  console.log("Invalid course. Please select BSCS, BSM, or BAEL.");
}