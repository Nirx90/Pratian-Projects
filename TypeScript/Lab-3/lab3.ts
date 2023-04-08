function totalprice(n1:number,n2:number){
    return n1+n2;
}

const itemprice = 50;
const dcharge = 15.6;
const result = totalprice(itemprice,dcharge);
console.log('Total price of the order is Rs {result}');