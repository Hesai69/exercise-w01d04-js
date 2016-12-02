// task 1
// Write a function called knighted that takes a name and returns it with "Sir" in front
// when you use it - it should look like this

// var name = knighted('Elton');
// console.log(name) => 'Sir Elton'
var name = knighted('Elton');
function knighted(inputName){
  return 'Sir'+' '+inputName;
}
console.log(name);
document.getElementById('task-1').textContent = "task 1: function knighted(inputName){ return 'Sir'+' '+inputName; }";
// task 2
// Write a function called doubleIt that takes a number, doubles it and returns the new number
function doubleIt(inputNum){
  return inputNum*2;
}
var answer = doubleIt(2);
console.log(answer)// => 4
document.getElementById('task-2').textContent = 'task 2: function doubleIt(inputNum){ return inputNum*2; }';

// task 3
// Write a function called makeUser that takes a name and returns a new object
function makeUser(inputName){
  return {name : inputName};
}
var user = makeUser('Dave');
console.log(user); // => {name: 'Dave'}
document.getElementById('task-3').textContent = 'task 3: function makeUser(inputName){ return {name : inputName}; }';

// task 4
// Write a function called makeLink that takes a title and a url and returns a string of html
function makeLink(inputTitle, inputUrl){
  return '<a href="' + inputUrl + '">' + inputTitle + '</a>';
}
var aTag = makeLink('google', 'http://www.google.com');
console.log(aTag); // => '<a href="http://www.google.com">google</a>'
document.getElementById('task-4').textContent = 'task 4: function makeLink(inputTitle, inputUrl){return \'<a href="\' + \
  inputUrl + \'">\' + inputTitle + \'</a>\'; }';

// task 5
// Write a function called second that takes an array and returns the 2nd element in it
function second(array){
  return array[1];
}
var answer = second(['a', 'b', 'c']);
console.log(answer); // => 'b'
document.getElementById('task-5').textContent = 'task 5: function second(array){ return array[1]; }';

// task 6
// Write a function called toSentence that takes an array and returns a string
// where the items are joined by commas (except the last one which is joined with 'and')
// where the first letter is capitalized and the string ends in an exclamation point.
function toSentence(array){
  var i = 0;
  var arraySize = array.length;
  var combinedString ='';
  for(i; i<arraySize; i++){
    if(i===arraySize-1){
      combinedString += 'and ' + array[i].charAt(0).toUpperCase() + array[i].slice(1) + '!';
    } else {
      combinedString += array[i].charAt(0).toUpperCase() + array[i].slice(1) + ', ';
    }
  }
  return combinedString;
}
var sentence = toSentence(['lions', 'tigers', 'bears']);
console.log(sentence); // 'lions, tigers, and bears!'
document.getElementById('task-6').textContent = 'task 6: function toSentence(array){ var i = 0; \
  var arraySize = array.length; var combinedString =\'\'; \
  for(i; i<arraySize; i++){ if(i===arraySize-1){ combinedString += \'and \' + \
    array[i].charAt(0).toUpperCase() + array[i].slice(1) + \'!\'; } \
    else { combinedString += array[i].charAt(0).toUpperCase() + array[i].slice(1) + \', \'; } } \
    return combinedString; }';

// task 7
// Write a function called random number that returns a random number between 0 and x
// Hint: Take a look at MDN's docs on Math.random
function randomNumber(inputNumber){
  return Math.ceil(Math.random() * inputNumber);
}
var answer = randomNumber(5);
console.log(answer); // 0..5
document.getElementById('task-7').textContent = 'task 7: function randomNumber(inputNumber){ \
  return Math.ceil(Math.random() * inputNumber); \
}';

// task 8
// Write a function called magicEightball that returns a random answer from the following list
// "yes", "no", "maybe", "ask again later", "most likely"
function magicEightball(){
  var list = ['yes', 'no', 'maybe', 'ask again later', 'most likely'];
  return list[Math.floor(Math.random() * list.length)];
}
var answer = magicEightball();
console.log(answer);  // yes || no || maybe etc...
document.getElementById('task-8').textContent = 'task 8: function magicEightball(){ \
  var list = [\'yes\', \'no\', \'maybe\', \'ask again later\', \'most likely\']; \
  return list[Math.floor(Math.random() * list.length)]; \
}'

// task 9
// write a function called pluck that takes an array of objects and a key as arguments
// and returns a list of those properties
function pluck(arrayObject, keyValue){
  var list = [];
  var i = 0;
  var arrayLength = arrayObject.length;
  for(i; i<arrayLength; i++){
    list.push(arrayObject[i][keyValue]);
  }
  return list;
}
var students = [{name: 'Harry', age: 12}, {name: 'Hermione', age: 13}, {name: 'Draco', age: 13}];
var names = pluck(students, 'name');
console.log(names); // ['Harry', 'Hermione', 'Draco']
document.getElementById('task-9').textContent = 'task 9: function pluck(arrayObject, keyValue){ \
  var list = []; \
  var i = 0; \
  var arrayLength = arrayObject.length; \
  for(i; i<arrayLength; i++){ \
    list.push(arrayObject[i][keyValue]); \
  } \
  return list; \
}';
