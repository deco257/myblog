import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { GalerieComponent } from './galerie/galerie.component';
import { PubliciteComponent } from './publicite/publicite.component';
import { FooterComponent } from './footer/footer.component';

import { ContacterComponent } from './contacter/contacter.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { AboutComponent } from './about/about.component';
import { PaymentComponent } from './payment/payment.component';



@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    GalerieComponent,
    PubliciteComponent,
    FooterComponent,

    ContacterComponent,
     HomeComponent,
     ProductsComponent,
     AboutComponent,
     PaymentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
