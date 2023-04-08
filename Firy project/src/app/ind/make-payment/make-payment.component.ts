import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { MakePaymentService } from 'src/app/make-payment.service';

@Component({
  selector: 'app-make-payment',
  templateUrl: './make-payment.component.html',
  styleUrls: ['./make-payment.component.css']    
})
export class MakePaymentComponent implements OnInit {

  constructor(private makePay:MakePaymentService) { }

  ngOnInit(): void {    
  }   

  paymentForm = new FormGroup ({
    creditCardNumber: new FormControl('',[Validators.required,Validators.pattern("^[0-9]*$"),
    Validators.minLength(16),Validators.minLength(16)]),
    NameOnCard: new FormControl('',[Validators.required,, Validators.pattern('^[a-zA-Z \-\']+')]),
    ExpMonthAndYear: new FormControl('',[Validators.required]),
    CVV: new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(3)]),
  })

  payCollection(value:any){
  this.makePay.paymentUsers(value).subscribe((result)=>{
    console.warn(result);     
  })
  }
  minDate:any;
// getDate(){
//   var date:any =new Date();   // var toDate:any   var month:any= date.getMonth()+1;
//   if(month<10){
//       month='0'+ month;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
//   } 
//   var year:any =date.getYear();
//   this.minDate= year + '-' +month;
//   console.log(this.minDate)
// }

}
