import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import { OrderService } from 'src/app/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  constructor(private orderSer:OrderService) { }

  ngOnInit(): void {
  }

  orderForm= new FormGroup ({
    OrderNo: new FormControl(''),
    ContactName: new FormControl(''),
    OrderDate: new FormControl(''),
    ItemsOrdered: new FormControl(''),
    OrderTotal: new FormControl(''),
    TaxTotal: new FormControl(''),
    GrandTotal: new FormControl('')
  })

   collection(value:any){
    this.orderSer.saveUsers(value).subscribe((result)=>{
      console.warn(result);
    })
   }

}
