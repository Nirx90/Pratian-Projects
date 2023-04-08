//Interfaces
//enum declaration
//Define enum RestaurantType to store the type of restaurants
var RestaurantType;
(function (RestaurantType) {
    RestaurantType[RestaurantType["FastFood"] = 0] = "FastFood";
    RestaurantType[RestaurantType["Cafeteria"] = 1] = "Cafeteria";
    RestaurantType[RestaurantType["CoffeHouse"] = 2] = "CoffeHouse";
    RestaurantType[RestaurantType["Bistros"] = 3] = "Bistros";
})(RestaurantType || (RestaurantType = {}));
;
;
//Declaring Restaurant using the contract
var restaurantINI = {
    Name: 'string',
    Address: '43/1 Holi Faliyu Kumbhiya',
    Phone: 841687,
    Type: RestaurantType[RestaurantType.Cafeteria]
};
//Modify the function RestaurantDetails to accepts a type of the contract defined, to view the restaurant details.
var RestaurantDetails = function (rest) {
    //display the restaurant details
    console.log("Name:".concat(rest.Name, "  Address:").concat(rest.Address, "  Phone:").concat(rest.Phone, "  Restaurant Type:").concat(rest.Type));
};
//call the function to view the result
RestaurantDetails(restaurantINI);
