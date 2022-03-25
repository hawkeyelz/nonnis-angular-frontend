import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeedsComponent } from './beeds/beeds.component';
import { ContactusComponent } from './contactus/contactus.component';
import { JewleryComponent } from './jewlery/jewlery.component';
import { ServicesComponent } from './services/services.component';
import { SpecialsComponent } from './specials/specials.component';
import { LandingComponent } from './landing/landing.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  {path: '', component: LandingComponent},
  { path: 'Beeds', component: BeedsComponent },
  { path: 'Services', component: ServicesComponent },
  { path: 'Specials', component: SpecialsComponent },
  { path: 'Jewlery', component: JewleryComponent },
  { path: 'Connect', component: ContactusComponent },
  {path: '**', component: ErrorComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class ComponentRoutingModule {}
