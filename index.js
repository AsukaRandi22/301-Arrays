var states= ['CA', 'AL'];
states[0];
/*Using the array: ["cat", "fox", "dog", "monkey"], what is the index of:

"dog"?
"monkey"?
"cat"?
*/
var animals= ['cat', 'fox','dog', 'monkey'];
animals[2];
animals[3];
animals[0];

//fix these- should be fixed already
var randomNumbers= [1, 3, 4, 7, 9];
var words= ["the","quick","brown","fox","jumped","over",'the lazy', "dog"];
var booleans= [true, false, true];

/*Create arrays in the global scope of your program consisting of strings that represent:


Your favorite TV shows/movies
Names of people you know/care about
Favorite sports/activities*/

var favoriteMovie= ['LOTR', 'Lion King'];
var favoritePeople= ['Jude', 'Elizabeth', 'Josie'];
var favoriteActivities= ['gameing', 'reading'];

/*Accessing Array Elements
Using the arrays that you created in the last exercise, use the console to access:

First elements,
Last elements,
Other elements!
Write a function first that takes an array as an argument and returns the first element in that array.

Write a function last that takes an array as an argument and returns the last element in the array. Hint: What is the relationship between the index of the last element in the array and the length of the array?*/

/*Using push and unshift, make this array contain the numbers from zero through seven:

var arr = [2, 3, 4];
// your code here
arr; // => [0, 1, 2, 3, 4, 5, 6, 7]*/
var arr= [2, 3, 4];
arr.push(5);
arr;
arr.push(6,7);
arr;
arr.unshift(1);
arr;

/* why did this code return the number 4?*/
var arr = [5, 7, 9];
arr.push(6); 