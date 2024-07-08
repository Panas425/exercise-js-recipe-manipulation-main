//1
let recipeName = document.getElementById("recipe-name").innerText;
console.log("Recipe name: " + recipeName);

//2
let recipeTag = document.getElementById("recipe-name").tagName;
console.log("The tagname is: " + recipeTag);

//3
const d = document.querySelector(".description");
const styles = window.getComputedStyle(d);
console.log(styles.fontSize);

//4
const image = document.querySelector("img");
console.log(image.getAttribute("alt"));

//5
const imageInfo = {
    url: image.getAttribute("src"),
    height: image.height,
    width: image.width
};
console.log(imageInfo)

//6
const ingr = document.querySelector(".ingredients-list-paste")
console.log("How many ingredients has the paste? " + ingr.childElementCount)

//7
console.log(ingr.getElementsByTagName('LI')[3].firstChild.nodeValue);




//8
const instructionL = document.querySelector(".instructions-list");
let instructions = [];

for(i = 0; i<instructionL.childElementCount; i++){
    let text = instructionL.getElementsByTagName('li')[i].firstChild.nodeValue
    text = text.replace(/\s+/g, ' ').trim();
    instructions.push( {
        order: i+1,
        text: text
    });
}
console.log(instructions)


//part 2

//1
document.querySelector(".logo-text").style.color = "black";
//2
document.querySelector("header").style.justifyContent = "flex-start";
//3
document.querySelector("header").style.borderBottomColor = "lightgray";
//4
document.querySelector("#recipe-name").innerHTML = "Frozen Cheescake";
//5
document.querySelector("span").classList.add("material-icons");
//6
document.querySelector(".time").innerHTML = "60+ min";
//7
const cake = document.querySelector("img")
image.setAttribute("src","assets/frozen-cheesecake-slice.jpg")
//8
document.querySelector(".ingredients-container").style.backgroundColor = "#f9f9f9"
//9
const ingredientsList = document.querySelector(".ingredients-list-bottom");
const list1 = "<li>15st digistivetex</li>";
const list2 = "<li>Lite smör</li>";
ingredientsList.innerHTML = list1 + list2;
//10 
const ingredientsListPaste = document.querySelector(".ingredients-list-paste");
const newThirdItem = document.createElement("li");
const toReplace3 = ingredientsListPaste.children[2]
newThirdItem.innerText = "3tsk vaniljsocker"
ingredientsListPaste.replaceChild(newThirdItem, toReplace3);
//11
const addItem = document.createElement("li");
addItem.innerText = "400g naturell philadelphiaost"
ingredientsListPaste.appendChild(addItem);
//12 
const instructionsShadow = document.querySelector(".instructions.shadow");
instructionsShadow.style.boxShadow = '0px 0px 0px';
//13
const ingredientsListInst = document.querySelector(".instructions-list");
const newItem1 = document.createElement("li");
newItem1.innerText = "Separera ägggulor och äggvitor. Äggvitorna lägger du i en stor bunke, äggulorna i en liten bunke."

const newItem2 = document.createElement("li");
newItem2.innerText = "Ställ in i frysen över natten."
const toReplace2 = ingredientsListInst.children[8]
ingredientsListInst.replaceChild(newItem2, toReplace2);

