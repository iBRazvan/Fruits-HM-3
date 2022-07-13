
// const fruits = ["Banana", "Orange", "Apple", "Mango"] You can of course add more elements to the array

// Given this array

// Create a HTML list that contains the elements of the fruits array
// Banana
// Orange
// Apple
// Mango
// Clues! Declare a variable that will be the ul iterate the fruits array and create the li elements *use appendChild method to add the li elements to the ul For the number in front of every fruit use the "i" parameter that represents the position of the iterator.

// Apply styles to the list. In the design you will find only three fruits but there can be unlimited depending on the array length and content
let container = document.createElement("div");
document.body.appendChild(container);
  container.style = "display: flex; flex-direction: column; justify-content: center; align-items: center; width: 100%; height: 100vh; background: #205d6f; ";
let contentContainer = document.createElement("div");
container.appendChild(contentContainer);
  contentContainer.style = "-webkit-box-shadow: 4px 5px 7px 4px #000000; box-shadow: 4px 5px 7px 4px #000000;"
  let paragraph = document.createElement("p");
  contentContainer.appendChild(paragraph);
    paragraph.innerText = "Fruits";
    paragraph.style = "font-weight: 700; font-size: 3rem; text-align: center; background: rgb(180,209,63); background: -moz-linear-gradient(90deg, rgba(180,209,63,1) 0%, rgba(140,204,63,1) 31%, rgba(165,197,98,1) 46%, rgba(210,212,56,1) 83%, rgba(140,204,63,1) 100%); background: -webkit-linear-gradient(90deg, rgba(180,209,63,1) 0%, rgba(140,204,63,1) 31%, rgba(165,197,98,1) 46%, rgba(210,212,56,1) 83%, rgba(140,204,63,1) 100%); background: linear-gradient(90deg, rgba(180,209,63,1) 0%, rgba(140,204,63,1) 31%, rgba(165,197,98,1) 46%, rgba(210,212,56,1) 83%, rgba(140,204,63,1) 100%);"
  let listContainer = document.createElement("ul")
  contentContainer.appendChild(listContainer);
  const fruits = ["Banana", "Orange", "Apple", "Mango", "Cherry"];
    const addFruitElement = () => {
      fruits.map((fruits, i) => {
        let fruitsElement = document.createElement("li");
        fruitsElement.innerText = `${i+1}. ${fruits} `;
        listContainer.appendChild(fruitsElement);
        listContainer.style = "margin: 0; padding: 1em; text-align:start; background-color: rgb(225, 255, 230); color: black; list-style-type: none; font-size: 40px;"
      })
    }
addFruitElement();


   



