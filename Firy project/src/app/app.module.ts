import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppRoutingModule ,routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { FamousComponent } from './ind/famous/famous.component';
import { OfferComponent } from './ind/offer/offer.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';

import {AuthModule} from './auth/auth.module';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';   

// toster
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AuthGuard } from './auth/auth.guard';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { CartComponent } from './ind/cart/cart.component';
import { ViewOrderInfoComponent } from './ind/view-order-info/view-order-info.component';
import { OrderComponent } from './ind/order/order.component';
import { MakePaymentComponent } from './ind/make-payment/make-payment.component';



@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    FamousComponent,
    OfferComponent,
    RegisterComponent,
    LoginComponent,
    CartComponent,
    ViewOrderInfoComponent,
    OrderComponent,
    MakePaymentComponent,
  
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AuthModule,
    FormsModule,
    BrowserAnimationsModule, // required animations  module
    ToastrModule.forRoot(),
    ReactiveFormsModule
  ],
  providers: [AuthGuard,{
    provide:HTTP_INTERCEPTORS,
    useClass:TokenInterceptorService,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
