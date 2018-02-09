/*
* Create a variable for each order with the order number as the name of the variable.
* Create an object for each order based on the specs in the ReadMe
* Each object will have two nested objects ex.(pizza & toppings)
* Keys with more than one value should be an array of strings ex. Veggies
*/
var order11821 = {
	firstname:"James",
	lastname:"Franko",
	address:"2155 E Lake Dr",
	city:"Seattle",
	zipcode:11310,
	pizza: {
		crust:"thin",
		pizzasauce:"robust marinara",
		cheese: "regular",
		toppings: {
			veggies: "olives", "green peppers",
			meats: "pepperoni", "ham", "sasusage",

			
		}
	},
	sideitems:"breadsticks", "bbq wings 6 piece"
	Sauces:"ranch",
	Specialinstructions:"please cut into squares",
	paymenttype:"cash",
	storeId:112

}

var order11372 = {
	firstname:"Justin",
	lastname:"Bieber",
	address:"1801 W Rodeo Dr",
	city:"Beverly Hills",
	state:"CA",
	zipcode:91833,
	pizza: {
		crust:"stuffed crust",
		pizzasauce:"creamy garlic alfredo",
		cheese:"double",
		toppings: {
			veggies:""
		}
	}
}

		



/*
* Create a new variable named currentOrders
* currentOrders should be single object containing both orders from above
*/

/*
* Make the changes to the currentOrders object based on the ReadMe
* Run your file with node pizza.js
* Console.log(currentOrders) to verify changes have been made
*/
