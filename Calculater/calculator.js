function add(){
    var c;
    a=document.getElementById("num1").value;
    b=document.getElementById("num2").value;

     c=parseInt(a)+parseInt(b);
     document.getElementById('print').innerHTML = "Sum is : "+c;
}

function sub(){
    var c;
    a=document.getElementById("num1").value;
    b=document.getElementById("num2").value;

     c=parseInt(a-b);
     document.getElementById('print').innerHTML = "Subastrsct is : "+c;
}

function multi(){
    var c;
    a=document.getElementById("num1").value;
    b=document.getElementById("num2").value;

     c=parseInt(a)*parseInt(b);
     document.getElementById('print').innerHTML = "Multiplication is : "+c;
}

function div(){
    var c;
    a=document.getElementById("num1").value;
    b=document.getElementById("num2").value;

     c=parseInt(a)/parseInt(b);
     document.getElementById('print').innerHTML = "Divid  is : "+c;
}

