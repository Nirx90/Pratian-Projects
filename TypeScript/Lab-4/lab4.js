function totalprice(n1, n2, showres) {
    if (showres) {
        console.log(n1 + n2);
    }
    else {
        return n1 + n2;
    }
    return n1 + n2;
}
var itemprice = 50;
var dcharge = 15.6;
var printres = false;
var result = totalprice(itemprice, dcharge, printres);
console.log("Total price of the order is Rs ".concat(result));
