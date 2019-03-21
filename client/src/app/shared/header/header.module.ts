import {NgModule} from "@angular/core";
import {HeaderComponent} from "./components";
import {NavBarModule} from "../../elements/nav-bar";

@NgModule ({
    declarations: [
        HeaderComponent,
    ],
    exports: [
        HeaderComponent,
    ],
    imports: [
        NavBarModule,
    ],
})

export class HeaderModule {}
