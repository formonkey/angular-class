import { NgModule } from "@angular/core";

import { HeaderComponent } from "./components";
import { NavBarModule } from "../../elements/nav-bar";

@NgModule({
    imports: [
        NavBarModule,
    ],
    declarations: [
        HeaderComponent,
    ],
    exports: [
        HeaderComponent,
    ],
})

export class HeaderModule {}
