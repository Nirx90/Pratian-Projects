import { Component, OnInit } from '@angular/core';
import { ViewOrderService } from 'src/app/view-order.service';

@Component({
  selector: 'app-view-order-info',
  templateUrl: './view-order-info.component.html',
  styleUrls: ['./view-order-info.component.css']
})
export class ViewOrderInfoComponent implements OnInit {

  constructor(private httpviewOrder:ViewOrderService) { }

  ngOnInit(): void {
    this.getOrderData();
  }

  users:any=""

  getOrderData(){
    this.httpviewOrder.users().subscribe((data)=>{
      this.users=data;
    })
  }
     
}
