console.log("hello sweets.js");

console.log("do I have inventory??", inventory);

// a good habit is to reference the place that you want to put it (meaning where the data will be put on the page), this is the variable that is made to hold onto the place in the html file
let sweetspot=document.getElementById("sweetspot");
console.log("sweetspot", sweetspot);


//our inventory is an array, there are multiple ways to loop through it:
// can use for loop or for each. you have the option to pass in three values to a for each, the first value is the item and the second is the index and third an array.
// what this is saying is that for each item in this array 
inventory.forEach(function(item, index){
    console.log("sweet item", item, index);
    sweetspot.innerHTML += `<li class="fancy">${item.name}: ${item.kind}</li>`;
});


//the fat arrow replaces having to type out the word "function"
//we put a class on the 'li' to target where to put the text/data in the html (where to display it in the browser)
inventory.forEach((item, index) => {
    console.log("sweet item", item, index);
    sweetspot.innerHTML += `<li class="fancy">${item.name}: ${item.kind}</li>`;
});


let getFancy=document.getElementsByClassName("fancy");
console.log("fancy class stuff", getFancy);

//this is saying show me what item is at the first index
console.log("fancy item", getFancy[0].innerHTML);


//this variable is storing the amount of inventories in the array at that current time, the value could change depending on when you call it and will display the amount of inventories you currently have in the array. it will always return to you the current amount in the inventory, the contents of the array can change.
const howmanySweets = () => {
    return inventory.length;
}

//looks at inventory and gives the length
const getHowManySweets=() => {
    return inventory.length;
}

//this is holding the count ??
const totalNumberSweets = () => {
    var count = getHowManySweets ();
    console.log("howmany:", count);
}


//seperate the js functionalities from the html (as in don't write your js into your html, write it in the js file)

// this variable equal the line in the html
// to this variable add the event listener(listening for things to happen) and when it happens perform this(the equation in the parenthesis)
// let btnGetTotalAmounts = document.getElementById("btn-getTotalSweets");
// btnGetTotalAmounts.addEventListener("click", totalNumberSweets);
// this is condensing the code to combine the previous line but make it more concise
let btnGetTotalAmounts = document.getElementById("btn-getTotalSweets").addEventListener("click", totalNumberSweets);


//this step is defining what the variable sweet is (creating the object sweet) and listing what the properties of that will include. this is the object constructor, it is just laying out the list of properties that define the object.
//this.bake is a function that was added, functions can be added to functions. this is how we define the object. 'bake' is an method of 
function Sweet(name, kind, flavor, topping, topcolor){
    this.name = name;
    this.kind = kind;
    this.flavor = flavor;
    this.topping = topping;
    this.topcolor = topcolor;
    this.bake = function(){
        let ovenTemp = 300;
        if (this.kind === "cake"){
            ovenTemp = 350;
        }else if(this.kind === "brownie"){
            ovenTemp = 375;
        }
        return ovenTemp;
    }
}


// this is pushing 
// this function is waiting to run, but it wont run until you tell it to
function addGreenOne(){
    inventory.push(new Sweet("Christmas Tree", "cake", "white", "none", "green"));
    console.log("new inventory", inventory);
} 

//this is calling the function 'addGreenOne' to action with the "click event". meaning it has the function run when the button is clicked. each seperate function is written to do a certain thing. when the variable 'addGreenSweet' is "called" the function 'addGreenOne' is run and the new data is then stored in the id 'btn-addGreenSweet'
let addGreenSweet = document.getElementById("btn-addGreenSweet").addEventListener("click", addGreenOne);


// we are creating a prototype of a new object to be added to the array, this is the way to write open ended code to be used over and over to hold new data. the job of this function is to make a new inventory object 
function makeSweetObj(name, kind, flavor, topping, topcolor){
    return new Sweet(name, kind, flavor, topping, topcolor);
}

//the job of this function is to add the new object to the array
function addNewSweet(){
    inventory.push(makeSweetObj("Camper Tree", "cake", "chocolate", "sprinkles", "green",));
    console.log("new inventory is", inventory);
    showSweets();
}

//this function is putting the data into this place on screen as written in the html. its putting it in its place
function showSweets(){
    inventory.forEach( (item, index) => {
        document.getElementById("new-version").innerHTML += `<li>${item.name}: ${item.topcolor}</li>`;
    });
}


//then you need to add a button to be clicked on the screen to call the function
let btnAddSweet = document.getElementById("btn-addSweet").addEventListener("click", addNewSweet);

//objects can hold other objects
// now the next step that we are doing is going to add actions to use the object

let newInventory = [];
function makeNewInventory(){
    inventory.forEach((item, index) => {
        newInventory.push(makeSweetObj(item.name, item.kind, item.flavor, item.topping, item.topcolor))
    });

}

makeNewInventory();

const bakeSweet = () => {
    let item = newInventory[0];
    let ovenTemp = item.bake();
    console.log("ovenTemp", ovenTemp);
}

let btnBakeSweet = document.getElementById("btn-bakeSweet").addEventListener("click", bakeSweet);

//.filter is a property that can filter out only the items that we want to take out