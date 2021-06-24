import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { UslugeCardComponent } from "./usluge-card.component";

@NgModule({
    declarations:[UslugeCardComponent],
    imports:[CommonModule, IonicModule],
    exports:[UslugeCardComponent],
})
export class UslugeCardModule{}