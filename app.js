/* Exercise 1: Define an empty array */

let foods = [];
console.log('Exercise 1', foods);

/* Exercise 2: add pizza and cheeseburger */
foods.push('Pizza');
foods.push('Cheeseburger');  
console.log('Exercise 2 result:', foods);

/* Exercise 3: add taco using unshift */
foods.unshift('taco');
console.log('Exercise 3 result:',foods);
 
/* Exercise 4: access an array element */
let favFood = foods[1];
console.log('Exercise 4 result:', favFood);

// Exercise 5: Insert an element between two others
foods.splice(2, 0, "tofu");
console.log('Exercise 5 result:',foods);

//Exercise 6: Replace elements
foods.splice(1, 1, "sushi", "cupcake");
console.log('Exercise 6 result:', foods); 

//Exercise 7: create an array and assign to a variable
let yummy = foods.slice(1,3);
console.log('Exercise 7 result:', yummy);

//Exercise 8: indexof
let soyIdx = foods.indexOf('tofu');
console.log('Exercise 8 result:', soyIdx);

//Exercise 9: join the elements in an array
let allFoods = foods.join('->');
console.log('Exercise 8 result:', allFoods);

//Exercise 10: check for an element
let hasSoup = foods.includes('soup');
console.log('Exercise 10 result', hasSoup);

//Exercise 11: odd numbers iteration using 'for' loop
let nums = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90]; 
let odds = [];
for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 !== 0) {
        odds.push(nums[i]);
    }
}
console.log('Exercise 11 result:', odds);

//Exercise 12: fizzbuzz
let fizz = [];
let buzz = [];
let fizzbuzz = [];

for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 3 === 0 && nums[i] % 5 === 0) {
        fizzbuzz.push(nums[i]);
    } else if (nums[i] % 3 === 0) {
        fizz.push(nums[i]); 
    } else if (nums[i] % 5 === 0) {
        buzz.push(nums[i]);
    }
}

console.log('Exercise 12 Results:');
console.log('  fizz:', fizz);
console.log('  buzz:', buzz);
console.log('  fizzbuzz:', fizzbuzz);

//Exercise 13: Retrieve the last array
const numArrays = [
	[100, 5, 23],
	[15, 21, 72, 9],
	[45, 66],
	[7, 81, 90]
];
let numList = numArrays[3];
console.log('Exercise 13 result:', numList);

//Exercise 14: Accessing the nested arrays
let num = numArrays[2][1];
console.log('Exercise 14 result:', num);

//Exercise 15: Nested Array sum
let total = 0;
numArrays.forEach(innerarray => {
    innerarray.forEach(Number => {
        total += Number;
    })
})

console.log('Exercise 15 result:\n', total);
