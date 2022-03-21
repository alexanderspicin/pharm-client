import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPanelComponent } from './admin/admin-panel/admin-panel.component';
import { CategoryListComponent } from './admin/category-list/category-list.component';
import { ProductCreatingComponent } from './admin/product-creating/product-creating.component';
import { UserListComponent } from './admin/user-list/user-list.component';
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
  {path: 'order-details/:id', component: OrderDetailsComponent},
  {path: 'admin', component:AdminPanelComponent,
    children: [
    {path: 'user-list', component: UserListComponent},
    {path: 'category-list', component:CategoryListComponent},
    {path: 'product-creating', component:ProductCreatingComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
