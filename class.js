
    //Get total
let marks = [80, 59, 65, 75, 56, 30];
function getResult(marks) {
  for (let i = 0; i < marks.length; i++) {
    if (marks[i] < 40) {
      return "You are fail";
    }
  }
  getTotalMarks(marks);
}
function getTotalMarks(marks) {
  let total = 0;
  for (let i = 0; i < marks.length; i++) {
    total += marks[i];
  }
  console.log("Your total marks is " + total);
  console.log("Your percentage is " + getPercentage(total, marks.length * 100));
  getDivision(total, marks.length * 100);
}
function getPercentage(totalMarks, total) {
  return (totalMarks / total) * 100;
}

function getDivision(totalMarks, total) {
  let percentage = 0;
  percentage = (totalMarks / total) * 100;
  if (percentage >= 80) {
    console.log("You got a distinction");
  } else if (percentage >= 60) {
    console.log("You got first division");
  } else if (percentage >= 50) 
    console.log("You got second division");
  }

console.log(getResult(marks));
   
    