let myNames = "Anolue Ekene Samuel";

const myCourses = ["HTML", "CSS", "JAVASCRIPT", "C#"];

console.log(myNames);

console.log(myCourses);

//Because I have even Number as my Courses,
//I'm finding and displaying all my even numbers by pushing them into the myEvenNumber empty Arrear

const myEvenNumbers = [];

for (let i = 1; i <= 200; i++) {
	if (i%2 === 0) {
		myEvenNumbers.push(i);
	}
}  console.log(myEvenNumbers);