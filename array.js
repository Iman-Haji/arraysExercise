// Task 1
// Create an array called "names" and set it's items to be
// David, Ann, Leia, Mathew and Mark.
// Print the array.
const names = ['David', 'Ann', 'Leia', 'Mathew', 'Mark'];
document.getElementById('task1').textContent = names; //all the names



// Task 2
// Print the second item of the array from the task 1.
console.log(names[1]); // Ann



// Task 3
// Print the length of the array.
console.log(names.length); // 5



// Task 4
// Print the last item of the array
console.log(names[names.length -1]); // Mark



// Task 5
// Add Peter as the last item to the array and print the whole array
names.push('Peter');
console.log(names); // adds the name Peter



// Task 6
// Print the array with spaces, not commas
document.querySelector('#task6').textContent = names.join('  '); // gives spaces

//names.join(' ');
console.log(names.join(' ')); // gives spaces 



// Task 7
// Replace Mathew in the array with Lisa and Abraham 
// Wrong Code:
//names [3] = "Lisa";
//names [4] =  "Abraham";
//console.log(names);

names.splice(3, 1, 'Lisa', 'Abraham');
document.getElementById('task7').textContent = names;


// Task 8
// Sort the array in the alphabetical order and print it
names.sort();
console.log(names.sort());


// Task 9
// Create an array called numbers and fill it with values 1, 7, 45, 32, 27, 86.
// Sort the numbers from largest to smallest. Print them.
let numbers=[1, 7, 45, 32, 27, 86];
numbers.sort(function(a,b){return a - b});
console.log(numbers);


// Task 10
// Randomize the numbers array.

// using 0.5 is most equal. Ifyou add something else other than 0,5, then it won’t be equal to 0 to 1.
//Not the best code:
//numbers.sort((a,b) => 0.5 - Math.random());
//console.log(numbers.sort());
numbers.sort((a,b) => 0.5 - Math.random())
document.getElementById('task10').textContent= numbers;


// Task 11
// Find the largest and smallest value from the numbers array using sort() function.
// Print those values.
//numbers.sort()
numbers.sort(function(a,b) {return a-b});
let smallestValue = numbers[0]; 
let largestValue= numbers[numbers.length -1];
console.log(smallestValue);
console.log(largestValue);