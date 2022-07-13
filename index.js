
// const fruits = ["Banana", "Orange", "Apple", "Mango"] You can of course add more elements to the array

// Given this array

// Create a HTML list that contains the elements of the fruits array
// Banana
// Orange
// Apple
// Mango
// Clues! Declare a variable that will be the ul iterate the fruits array and create the li elements *use appendChild method to add the li elements to the ul For the number in front of every fruit use the "i" parameter that represents the position of the iterator.

// Apply styles to the list. In the design you will find only three fruits but there can be unlimited depending on the array length and content
  
let container = document.getElementsByClassName("container");
let paragraph = document.querySelector("p");
paragraph.innerHTML = "List of Fruits";
    
const fruits = ["Banana", "Orange", "Apple", "Mango", "Cherry"];

const listContainer = document.getElementById("fruitList");
const createElements = () => {
  fruits.map((fruits, i) => {
    
      let fruitElement = document.createElement("li");
      fruitElement.innerHTML = `${i+1}.  ${fruits}`;
      listContainer.appendChild(fruitElement);
      
  })
}
createElements();

   



