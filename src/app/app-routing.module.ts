import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BucketComponent } from './bucket/bucket.component';
import { HomeComponent } from './home/home.component';
import {LoginComponent} from "./login/login.component";
import { OrderDetailsComponent } from './order-details/order-details.component';
import { OrdersComponent } from './orders/orders.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'home', component:HomeComponent},
  {path:'home/:category', component:HomeComponent},
  {path:'profile', component:ProfileComponent},
  {path: 'orders', component:OrdersComponent},
  {path:'register', component:RegisterComponent},
  {path: 'bucket', component: BucketComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'product-details/:id', component: ProductDetailsComponent},
  {path: 'order-details/:id', component: OrderDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
