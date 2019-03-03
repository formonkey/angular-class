import { NgModule } from "@angular/core";

import { SearchModule } from "../search";
import { HeaderComponent } from "./components";
import { NavBarModule } from "../../elements/nav-bar";

@NgModule({
    imports: [
        NavBarModule,
        SearchModule,
    ],
    declarations: [
        HeaderComponent,
    ],
    exports: [
        HeaderComponent,
    ],
})

export class HeaderModule {}
