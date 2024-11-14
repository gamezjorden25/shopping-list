var listItems = document.getElementsByTagName('li');                   // All <li> elements

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
var heading = document.querySelector('h2');                        // h2 element
var headingText = heading.firstChild.nodeValue;                    // h2 text
var totalItems = listItems.length;                                 // No. of <li> elements
var newHeading =  headingText + '<span>' + totalItems + '</span>'; // Content


/*  WRITE YOUR CODE BELOW */

var grocery_list = [];

function add_into_list(item){

grocery_list.push(item);
}
function remove_from_list(item){

for (var i = 0; i <= grocery_list.length; i++){

if (grocery_list[i] === item) grocery_list.splice(i, 1);
}}

function show_list(){

if (grocery_list.length == 0)

return;

else{

console.log("List Items : ");

for (var i = 0; i < grocery_list.length; i++){console.log("- " + grocery_list[i]);
}}}

element.className = 'cool';

getElementsByTagName.add_into_list('fresh figs');

getElementsByTagName.add_into_list('kale');

getElementsByTagName.add_into_list('honey')

show_list();

