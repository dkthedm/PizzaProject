var total = 0;
var meatArray = [];
var veggieArray = [];
var veggies = [];
var crust = null
var sauce = null
var cheese = null
var size = null
var meatCost = 0;
var veggieCost = 0;
var cheeseCost = 0;
var crustCost = 0;
var sizeCost = 0;
var sauceCost = 0;



var addSize = function(sizeSelected) {
     size = sizeSelected.value;
    
}


var addMeat = function(meat) {
    
    if (meat.checked) {
        meatArray.push(meat.value);
    }
    else {
        var index = meatArray.indexOf(meat.value);
        meatArray.splice(index, 1);
    }
}

var addVeggie = function(veggie) {
    if (veggie.checked) {
        veggieArray.push(veggie.value);
    }
    else {
        var index = meatArray.indexOf(veggie.value);
        veggieArray.splice(index, 1);
    }
}

var addCheese = function(cheeseSelected) {
    cheese = cheeseSelected.value;
}

var addCrust = function(crustSelected) {
    crust = crustSelected.value;
}

var addSauce = function(sauceSelected){
    sauce = sauceSelected.value;
}

var totalCost = function() {
    
    if (meatArray.length > 0) {
        meatCost = meatArray.length - 1;
    }
    if (veggieArray.length > 0) {
        veggieCost = veggieArray.length - 1;
    }
    if (cheese === 'extra cheese') {
        cheeseCost = 3;
    }
    if (crust === 'Cheese Stuffed Crust') {
        crustCost = 3;
    }
    if (size === 'personal'){
        sizeCost = 6
    }
    if (size === 'medium'){
        sizeCost = 10
    }
    if (size === 'large'){
        sizeCost = 14
    }
    if (size === 'extra-Large'){
        sizeCost = 16
    }


    var priceArray=[meatCost, veggieCost, sauceCost, sizeCost, cheeseCost, crustCost];
    var price=[];
    
    price = "<h3> Item Price: </h3>";
    
	for(var j = 0; j < priceArray.length; j++) {
        price += '<br><div>' + priceArray[j];

        document.getElementById("ItemPrice").innerHTML = price;
    }    

    total = meatCost + veggieCost + cheeseCost + crustCost + sizeCost + sauceCost;
    document.getElementById('orderTotal').innerHTML = "Total: $ " + total; 
    
    
}  


function getReceipt(){
    var masterArray = [meatArray, veggieArray, sauce, size, cheese, crust];
    
    select = "<h3>You Ordered:</h3>";   
    
    console.log(masterArray, 1);
     
    for(var i = 0; i < masterArray.length; i++) {
        select += '<br><div>' + masterArray[i];

    document.getElementById("Items").innerHTML = select;
   
    }
  }


 


