import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
// import { BeedsComponent } from './components/beeds/beeds.component';
// import { JewleryComponent } from './components/jewlery/jewlery.component';
// import { ServicesComponent } from './components/services/services.component';
// import { SpecialsComponent } from './components/specials/specials.component';
// import { ContactusComponent } from './components/contactus/contactus.component';
// import { ProductsComponent } from './components/products/products.component';
import { componentsModule } from './components/componets-module';
import { ComponentRoutingModule } from './components/componets-routing-module';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    // BeedsComponent,
    // JewleryComponent,
    // ServicesComponent,
    // SpecialsComponent,
    // ContactusComponent,
    // ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentRoutingModule,
    componentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
