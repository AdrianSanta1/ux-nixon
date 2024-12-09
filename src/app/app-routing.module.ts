import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { ProductRequestComponent } from './client/product-request/product-request.component';
import { MyProductsComponent } from './client/my-products/my-products.component';
import { CreateProductComponent } from './employee/create-product/create-product.component';
import { RequestListComponent } from './employee/request-list/request-list.component';
import { DashboardComponent } from './employee/dashboard/dashboard.component';
import { DeliveryRequestComponent } from './employee/delivery-request/delivery-request.component';
import { BankProductsComponent } from './employee/bank-products/bank-products.component';
import { ClientComponent } from './profile/client/client.component';
import { EmployeeComponent } from './profile/employee/employee.component';
import { RecargapseComponent } from './recargapse/recargapse.component'; // Importar RecargapseComponent

const routes: Routes = [
  { path: '', component: HomeComponent }, // Página principal
  { path: 'login', component: LoginComponent }, // Inicio de sesión
  { path: 'register', component: RegisterComponent }, // Registro
  { path: 'forgot-password', component: ForgotPasswordComponent }, // Recuperar contraseña
  { path: 'client/product-request', component: ProductRequestComponent }, // Solicitar producto
  { path: 'client/my-products', component: MyProductsComponent }, // Mis productos
  { path: 'employee/create-product', component: CreateProductComponent }, // Crear producto
  { path: 'employee/request-list', component: RequestListComponent }, // Lista de solicitudes
  { path: 'employee/dashboard', component: DashboardComponent }, // Dashboard
  { path: 'employee/delivery-request', component: DeliveryRequestComponent }, // Solicitudes de entrega
  { path: 'employee/bank-products', component: BankProductsComponent }, // Lista de productos del banco
  { path: 'profile/client', component: ClientComponent }, // Perfil Cliente
  { path: 'profile/employee', component: EmployeeComponent }, // Perfil Empleado
  { path: 'recargapse', component: RecargapseComponent }, // Ruta para Recarga PSE
  { path: '**', redirectTo: '', pathMatch: 'full' }, // Ruta comodín para manejar 404
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
