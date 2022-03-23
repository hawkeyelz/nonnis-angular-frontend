import { NgModule } from "@angular/core";
import { BeedsComponent } from "./beeds/beeds.component";
import { ContactusComponent } from "./contactus/contactus.component";
import { JewleryComponent } from "./jewlery/jewlery.component";
import { ProductsComponent } from "./products/products.component";
import { ServicesComponent } from "./services/services.component";
import { SpecialsComponent } from "./specials/specials.component";

@NgModule({
   declarations: [
    BeedsComponent,
    ContactusComponent,
    JewleryComponent,
    ProductsComponent,
    ServicesComponent,
    SpecialsComponent
   ],
   imports: [],
   providers: []
}) export class componentsModule {}