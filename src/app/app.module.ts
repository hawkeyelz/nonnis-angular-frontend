import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { componentsModule } from './components/componets-module';
import { ComponentRoutingModule } from './components/componets-routing-module';
import { LandingComponent } from './components/landing/landing.component';
import { ErrorComponent } from './components/error/error.component';
import { StoreModule } from '@ngrx/store';
import { ProductDisplayComponent } from './components/product-display/product-display.component';
import { VideoBackgroundComponent } from './components/video-background/video-background.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LandingComponent,
    ErrorComponent,
    ProductDisplayComponent,
    VideoBackgroundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentRoutingModule,
    componentsModule,
    StoreModule.forRoot({})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
