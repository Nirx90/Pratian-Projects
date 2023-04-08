function totalprice(n1:number,n2:number,showres: boolean,str:string){
    const result=n1+n2;
    if(showres)
    {
     // console.log(str+n1+n2);
     console.log(`${str} RS ${result}`);
    }
    else
    {
      return n1+n2;
    }
    
}

const custstring = "Chiken Half  Biryani";
const itemprice = 50;
const dcharge = 15.6;
const showres = true;
 totalprice(itemprice,dcharge,showres,custstring);
// console.log(`Total price of the order is Rs ${result}`);