import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ErrComponent } from './err/err.component';
import { HeaderComponent } from './ind/header/header.component';
import { MainComponent } from './ind/main/main.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';

import { ResetComponent } from './auth/reset/reset.component';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';
import { ResetPasswordDoneComponent } from './auth/reset-password-done/reset-password-done.component';

import { AuthGuard } from './auth/auth.guard';
import { CartComponent } from './ind/cart/cart.component';
import { ViewOrderInfoComponent } from './ind/view-order-info/view-order-info.component';
import { OrderComponent } from './ind/order/order.component';
import { MakePaymentComponent } from './ind/make-payment/make-payment.component';

     

const routes: Routes = [
  { path: '', component: MainComponent },

  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path:'order',component:OrderComponent},
  { path:'view-order-info',component:ViewOrderInfoComponent},
  { path:'make-payment', component:MakePaymentComponent},
  { path:'cart', component:CartComponent},
  { path: 'reset', component: ResetComponent },
  { path: 'reset-password', component: ResetPasswordComponent },
  { path: 'reset-password-done', component: ResetPasswordDoneComponent },

  { path: '**', component: ErrComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ErrComponent, HeaderComponent, MainComponent]