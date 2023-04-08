import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MakePaymentService {

  url="http://localhost:3000/comments";   

  constructor(private httpMakePay:HttpClient) { }

  paymentUsers(value:any){
    return this.httpMakePay.post(this.url,value)
  }

}
