
//1 Simple interest
function simple_interest()
{
var p,t,r,si,n;
p = document.getElementById ("principal").value;
t = document.getElementById ("time").value;
r = document.getElementById ("interest").value;
si = parseInt(p*r*t/100 );
n = parseInt(p)+si;

document.getElementById ('intamount').innerHTML =" interest amount : "+si;
document.getElementById ('tia').innerHTML =" Total amount with interest : "+n;
}

//2 even odd
function even_odd(){

    var a;
    a = document.getElementById ("zero").value;
 if(a%2==0)
 document.getElementById ('one').value =" The number is Even";
  
 else
 document.getElementById ('one').value =" The number is odd";
 if(a==0)
 document.getElementById ('one').value ="Zero";

}


//3 Marks
function Marks()
{
var p,t,r,q,a;
p = document.getElementById ("first").value;
q = document.getElementById ("second").value;
r = document.getElementById ("third").value;
t = parseInt(p)+parseInt(q)+parseInt(r);
a = parseInt(t/3);

document.getElementById ('total').innerHTML ="Total is: "+t;
document.getElementById ('ave').innerHTML =" Average is: "+a;


 if(a>60)
  document.getElementById ('class').innerHTML ="You got first class";
  if(a>50 && a<60)
  document.getElementById ('class').innerHTML ="You got second class";
  if(a>35 && a<50)
  document.getElementById ('class').innerHTML ="You got pass class";
  if(a<35)
  document.getElementById ('class').innerHTML ="You Are failed";

}


//4 1,4,9,16,25

function series(){
  var k="result";
  let a;
  for(var i=1;i<=10;i++){
       a=i*i;
       document.write(a+" ")
 }
 document.getElementById("shakshi").innerHTML= k;
}

// 5 tax
function tax()
        {
        var p,n;
        p = document.getElementById ("three").value;
        t = document.getElementById ("fourth").value;
        r = document.getElementById ("fifth").value;
       // si = parseInt(p*r*t/100 );
        n = parseInt(p)+parseInt(t);
        s = parseInt(n*12)+parseInt(r);
        a= parseInt(s*5/100)
        b= parseInt(s*20/100)
        c= parseInt(s*30/100)
        d= parseInt(s)-parseInt(a)
        e= parseInt(s)-parseInt(b)
        f= parseInt(s)-parseInt(c)
        
      document.getElementById ('GS').innerHTML =" Gross Monthly  Salary: "+n;
      document.getElementById ('AS').innerHTML =" Annual  Salary: "+s;

      if(s<250000)
      document.getElementById ('NS').innerHTML =" exampted ";
      if(s>250000 && s<500000)
      document.getElementById ('NS').innerHTML =" You have to pay 5% Tax of your annual salary is: "+a + "Your net salary is:"+ d;
      if(s>500000 && s<1000000)
      document.getElementById ('NS').innerHTML =" You have to pay 20% Tax of your annual salary is: "+b + "Your net salary is:"+ e;
      if(s>1000000)
      document.getElementById ('NS').innerHTML =" You have to pay 30% Tax of your annual salary is: "+c + "Your net salary is:"+ f;
      
       
}

// 6  series
function series6(){
  var b=1;
  for(var i=0;i<=20;i+=2){
    b=i+b;
  document.write(b+" ")
  
  }
}

// 7  multiple of 7

function multi(){
  var i;
  count = 5000
  for (var i = 0; i < count; i++)
  {
      if(i%7==0)
      {
          if(i%2==1 && i%3==1 && i%5==1 && i%4==1 && i%6==1)
      document.write(i+" ")

      }
    
  }
}

// 8 fibonaci

function fibo(){
  var a=1,b=1;
    
  document.write(a+" ");
  document.write(b+" ");
  for(var i=1;i<20;i++)
  {
     c=parseInt(a)+parseInt(b);
     document.write(c+" ");
    
     a=b;
     b=c;
  }
}

// 9 fibonaci

function fibo2(){
  var a=1,b=4,c=7;
    
  document.write(a+" ");
  document.write(b+" ");
  document.write(c+" ");
  for(var i=1;i<20;i++)
  {
     d=parseInt(a)+parseInt(b)+parseInt(c);
     document.write(d+" ");
    
     a=b;
     b=c;
     c=d;
  }
}

//10 fourth skip series

function four(){
  var m;
  for(var l=1;l<=30;l++)
{
  m=l*l;
  if(l%4!=0)
  document.write(m+" ")
}
}

// 11 star

function star(){
  let k=1;
                
  for(let z=1;z<=5;z++)
  {
        for(let b=0;b<z;b++)
       {
          //k=b*b;
          if(k%2==0)
        {  document.write(-1*k*k+" ")}
          else 
        {  document.write(k*k+" ")}
         k++;
         
        }
        document.write("<br>");
  }
}
// 12 two series

function twoseries(){

    var b=1;
    var c=2;
    for(var i=1;i<=20;i++){
      
    document.write(b+" ")
    b=b+3;
      
    document.write(c+" ")
    c=c+4;
    
    }
  
}

//13 left star

function leftstar(){
  for(var i=1;i<=4;i++){
    for(var j=3;j>=i;j--){
      document.write("&nbsp&nbsp")
    }
    for(var k=1;k<=i;k++){
      document.write("*")
    }
    document.writeln("<br>")
  }
}

// 800 802 804 804

function love(){
  var a=800,k=800,count=0;
  for(var i=1;i<=20;i++){
    document.write(a+" ")
    a=a+i*2;

  }
  document.write("<br>")
     for( var j =1;j<=20;j++){
      
    // 852
    var b=k/100;  //8
    var c=k%100;  //52
    var d=c/10;  //5
    var e=k%10; //2

    k=k+j*2;

    var f=parseInt(b)+parseInt(d)+parseInt(e);

    document.write(f+" ")
   
    var h = parseInt(f/10);
    var z = parseInt(f%10);

    if(h==1 || z==1)
    {
      //document.write(f+" ")
      count++;
    }
      }
      document.write("<br>")
      document.write("count is : "+ count)

  }
  // var f= document.getElementById ("love").value;;
  //                 var s=0;
  //                 document.getElementById ('sum').innerHTML ="Number is :"+ f;
  //                 //document.write("Number is :"+ f);
  //                 while(f != 0)
  //                 {
  //                   s += f%10;
  //                   f = parseInt(f/10);

  //                 }
  //                 //document.write("<br>"+"sum is:"+ s);
  //                 document.getElementById ('gogo').innerHTML ="Sum of degits are :"+ s;
// 15 power of number

function power(){

  n = document.getElementById ("eni").value;
  p = document.getElementById ("power").value; 
  var sum=1;
  for(var i=1;i<=p;i++){
    sum=sum*n;
  }
  document.getElementById('ans').innerHTML= "Ans is : "+sum;

}

// Q17  

function Q17(){
 var  n = document.getElementById ("virat").value;
  var a=1,b=1,count=0;
  for(var i=1;i<=n;i++){
   
    document.write(b+" ")
    a=i*i;
    b=b+a;

    var c=parseInt(b/10);
    var d=parseInt(b%10);

    if(c==9 || d==9 )
    {count++;}

  }
  document.write("<br>")
  document.write("digit 9 in them are count is : "+count)

}

//Q18 

function customer(){
  var p,t,r,total,n,i,c,d;
  p = document.getElementById ("qty").value;
  t = document.getElementById ("price").value;
  r = document.getElementById ("interest").value;

  total = p*t;
  i = parseInt(total*0.1);
  c=parseInt(total*0.025);
  d=total-i;
  //d = parseInt(total)-parseInt(i);
  e = total+c;

  document.getElementById('pr').innerHTML= "Total is : "+total;

  if(total<1000)
  {
    document.getElementById('manje').innerHTML= "Total is <1000 so 2.5% Charge is: "+c;
  
  document.getElementById('tinu').innerHTML= "Total net Payable amount is : "+e;
  }

  if(total>10000){
  document.getElementById('manje').innerHTML= "Total is >10000 so 10% discount is: "+i;
  
  document.getElementById('tinu').innerHTML= "Total net Payable amount is : "+d;
}

   
   var a= [" ","one "," two ","three","four","five","six","seven","eight","nine","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen" ];
  var b= [" "," ten "," twenty "," thirty "," fourty "," fifty "," sixty "," seventy "," eighty "," ninety " ];
    var h= " Hundred ";
    var t=" Thousand ";

 //1245 , 763
 var kk = parseInt(e/100); //7
 var mm = parseInt(e%100); // 63
 var nn = parseInt(parseInt(mm/10)); //6
 var jj = parseInt(e%10);  //3
 var ss = parseInt(e/10);

  var k=parseInt(total/1000);  //1           
  var j=parseInt(total%10);  //5
  var m=parseInt(total%1000); //245
  var n=parseInt(parseInt(m/100));  //2
  var o=parseInt(parseInt(m%100));  //45
  var p=parseInt(parseInt(o/10));  //4
 
  if(e<100 && e>=20)
  {
    document.getElementById('dube').innerHTML= "Total net Payable amount in Words is : "+b[ss]+a[jj];
  }
  if(total>100 && total<1000)
  {
    document.getElementById('dube').innerHTML= "Total net Payable amount in Words is : "+a[kk]+h+b[nn]+a[jj];
  }
  if(total>1000 && total<10000){
  document.getElementById('dube').innerHTML= "Total net Payable amount in Words is : "+a[k]+t+a[n]+h+b[p]+a[j];
  }


}


function matrix(){
  var p = prompt("Enter rows of matrix");
  var n = prompt("Enter columns of matrix");

  let a = new arr(3) ,i,j;

for(i=0;i<3;i++){
  a [i] = new arr(3);}

  for(i=0;i<3;i++)
  {
    for(j=0;j<3;j++)
    {
    a[i][j] = prompt("enter matrix element");
    }
  }
  document.write("Matrix is");
  
  for(i=0;i<3;i++)
  {
    for(j=0;j<3;j++)
    {
    document.write(arr[i][j]+" ");
    }
    document.write("<br>");
  }

}


