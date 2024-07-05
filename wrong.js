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

