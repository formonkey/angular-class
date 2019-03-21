import {NgModule} from "@angular/core";

import {HomeComponent} from "./components";
import {HeaderModule} from "../../shared/header";
import {HomeMoreComponent} from "./components/more";
import {HomeOverviewComponent} from "./components/overview";
import {JumbotronModule} from "../../elements/jumbotron";
import {CardModule} from "../../elements/card";

@NgModule ({
    imports: [
        CardModule,
        HeaderModule,
        JumbotronModule,
    ],
    declarations: [
        HomeComponent,
        HomeMoreComponent,
        HomeOverviewComponent,
    ],
    exports: [
        HomeComponent,
    ]
})

export class HomeModule {}
