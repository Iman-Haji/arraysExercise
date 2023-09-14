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

//or 

//names.join(' ');
console.log(names.join(' ')); // gives spaces 



// Task 7
// Replace Mathew in the array with Lisa and Abraham 
names [3] = "Lisa";
names [4] =  "Abraham";
console.log(names);



// Task 8
// Sort the array in the alphabetical order and print it




//names.sort('  ');
//document.querySelector('#task8').textContent = names;



// Task 9
// Create an array called numbers and fill it with values 1, 7, 45, 32, 27, 86.
// Sort the numbers from largest to smallest. Print them.



// Task 10
// Randomize the numbers array.



// Task 11
// Find the largest and smallest value from the numbers array using sort() function.
// Print those values.