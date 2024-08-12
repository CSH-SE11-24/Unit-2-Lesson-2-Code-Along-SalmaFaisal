// IF STATEMENT REVIEW
// Day of the Week: Prompt the user to enter a day of the week (e.g., "Monday") and say whether it's a weekday or the weekend.
// let dayOfWeek = prompt("Pick a day of the week")
//.toUpperCase() makes everything uppercase
//.toLowerCase() makes everything lowercase
// dayOfWeek = dayOfWeek.toLowerCase() 
// if (dayOfWeek === "saturday" || dayOfWeek === "sunday"){
//   console.log("Yay, no school!")
// } else {
//   console.log("Yay, school!")
// }




// Age Group Classifier: Prompt the user to enter their age and categorize them into different age groups (child (<12), teen (<18), adult (<65), senior)





// WHILE LOOPS
// Print 1 to 5

let i = 1 
while(i <= 5){
  console.log(i)
  i++
}




// Print from a certain number to 1


let user = prompt("Enter a number")
user = parseInt(user)
while (user > 0){
  console.log(user)
  user--
}

// Summing up to 5

let sum = 0 //we will be adding numbers to this variable
let counter = 1
// 1+ 2 + 3 + 4 + 5
while (counter <= 5){
sum = counter + sum 
  counter ++
}
console.log("Sum of 1-5",sum)

// Using prompt

let mysteryStudent = "salma"
let user2 = prompt("Enter a student's name")
while(mysteryStudent != user2.toLowerCase()){
  user2 = prompt("Try again, guess a different student")
}
console.log("Good job")

