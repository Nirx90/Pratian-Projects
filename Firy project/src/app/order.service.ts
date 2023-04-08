import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private httpOrder:HttpClient) { }

  url="http://localhost:3000/posts";

  saveUsers(value:any){
    return this.httpOrder.post(this.url,value)
  }
}
