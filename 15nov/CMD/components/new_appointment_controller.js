// import { Appointment } from "../models/cmdModels"

// //Function to display the appointment information
// let displayAppointmentInfo = function (appointment) {

//   //Write your code here to display data from appointment object received
// };

// //Function to create an appointment 
// let createAppointment = function () {
//   //Create a Paient Object and fill the data -  Write your code here

//   //Create a Doctor Object and fill Data - Write your code here


//   //Create an Appointment Object and fill data -  Write your code here
//   let appointment = new Appointment();


//   //Call the method to display appointment information
//   displayAppointmentInfo(appointment);
// };

// //1. Start by creating an appointment - This is the first method to be called
// createAppointment();


var Paient={
  name: "Nirav",
  gender : "Male",
  mobileno: "9586837258",
  isregisterd:"yes",
  registerdate:"12/11/2022"


};
console.log(Paient);

const Book = function(t, a) {
  let title = t;
  let author = a;
  return {
 summary : function() {
  console.log('${title} written by ${author} . ') ;
       }
   }
}
const book1 = new Book ('Hippie', 'Paulo Coelho')

book1.summary();