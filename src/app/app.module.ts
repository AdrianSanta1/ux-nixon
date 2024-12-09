import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { ClientComponent } from './profile/client/client.component';
import { EmployeeComponent } from './profile/employee/employee.component';
import { ProductRequestComponent } from './client/product-request/product-request.component';
import { MyProductsComponent } from './client/my-products/my-products.component';
import { CreateProductComponent } from './employee/create-product/create-product.component';
import { RequestListComponent } from './employee/request-list/request-list.component';
import { DashboardComponent } from './employee/dashboard/dashboard.component';
import { DeliveryRequestComponent } from './employee/delivery-request/delivery-request.component';
import { BankProductsComponent } from './employee/bank-products/bank-products.component';
import { RecargapseComponent } from './recargapse/recargapse.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    ClientComponent,
    EmployeeComponent,
    ProductRequestComponent,
    MyProductsComponent,
    CreateProductComponent,
    RequestListComponent,
    DashboardComponent,
    DeliveryRequestComponent,
    BankProductsComponent,
    RecargapseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
