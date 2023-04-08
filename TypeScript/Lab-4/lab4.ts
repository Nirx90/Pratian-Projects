function totalprice(n1:number,n2:number,showres: boolean){
    if(showres)
    {
      console.log(n1+n2)
    }
    else
    {
      return n1+n2;
    }
    return n1+n2;
}

const itemprice = 50;
const dcharge = 15.6;
const printres = false;
const result = totalprice(itemprice,dcharge,printres);
console.log(`Total price of the order is Rs ${result}`);