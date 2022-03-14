import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';
import { RegisterComponent } from './register/register.component';
import { MaterialModule } from './material-module';
import { NotificationService } from './services/notification.service';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NavigationComponent } from './layout/navigation/navigation.component';
import { FilterPipe } from './heplers/filterSearch';
import { ProductService } from './services/product.service';
import { PagerService } from './heplers/PagerService';
import { NgxPaginationModule } from 'ngx-pagination';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { BucketComponent } from './bucket/bucket.component';
import { ProfileComponent } from './profile/profile.component';
import { OrdersComponent } from './orders/orders.component';
import { OrderDetailsComponent } from './order-details/order-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    NavigationComponent,
    FilterPipe,
    ProductDetailsComponent,
    BucketComponent,
    ProfileComponent,
    OrdersComponent,
    OrderDetailsComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [AuthService,UserService, NotificationService, ProductService, PagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
