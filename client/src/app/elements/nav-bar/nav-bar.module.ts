import { NgModule } from "@angular/core";
import { NavBarComponent } from "./components";

@NgModule({
    declarations: [
        NavBarComponent,
    ],
    exports: [
        NavBarComponent,
    ]
})

export class NavBarModule {}
