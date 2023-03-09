import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContacterComponent } from './contacter/contacter.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { PubliciteComponent } from './publicite/publicite.component';
import { AboutComponent } from './about/about.component';
import { PaymentComponent } from './payment/payment.component';


const routes: Routes = [
  {
    path:'',redirectTo:'home',pathMatch:"full"
  },
{
  
path:"payment",
component:PaymentComponent
},
  {
    path:'publicite',
    component:PubliciteComponent
   },
   {
    path:'about',
    component:AboutComponent
   },

 {
  path:'contacter',
  component:ContacterComponent
 },
 {
  path:'home',
  component:HomeComponent
 },
 {
  path:'products',
  component:ProductsComponent
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
