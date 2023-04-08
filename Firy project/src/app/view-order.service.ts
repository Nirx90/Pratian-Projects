import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ViewOrderService {

  constructor(private httpviewOrder:HttpClient) { }

  url=" http://localhost:3000/posts";

  users(){
    return this.httpviewOrder.get(this.url);
  }
}
