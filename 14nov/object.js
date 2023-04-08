

let simpleInterest={
      principle: 1000,
      rate: 3,
      time: 12,

};
console.log(simpleInterest)

var Employee = function(name,gender,age){
    this.name = name;
    this.age = age;
    this.gender = gender;
};

var Manager = function(teamSize){
   this.teamSize= teamSize; 
};

Manager.prototype = Employee;

let employee = new Employee();
employee.age=19;
employee.name="Jos Buttler";
employee.gender="male";

let manaegr = new Manager(30);
manaegr.age = 31;
manaegr.gender = "male";
manaegr.name = "Jos livingstone"

const Book = function (t,a){
    let title = t;
    let author = a;
    return{
        summary : function(){
            console.log(title);
            console.log(author);
        }
    };
};

let booknir = new Book("the winning");
booknir.summary();
