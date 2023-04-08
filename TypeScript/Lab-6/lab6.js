function totalprice(n1, n2, showres, str) {
    var result = n1 + n2;
    if (showres) {
        // console.log(str+n1+n2);
        console.log("".concat(str, " RS ").concat(result));
    }
    else {
        return n1 + n2;
    }
}
var custstring = "Chiken Half  Biryani";
var itemprice = 50;
var dcharge = 15.6;
var showres = true;
totalprice(itemprice, dcharge, showres, custstring);
// console.log(`Total price of the order is Rs ${result}`);
