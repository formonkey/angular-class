import { NgModule } from "@angular/core";

import { HeaderModule } from "../../shared";
import { HomeComponent } from "./components";
import { CardModule, HeroModule } from "../../elements";
import { HomeFeaturesComponent } from "./components/features";
import { HomeMoreInfoComponent } from "./components/more-info";

@NgModule({
    imports: [
        CardModule,
        HeroModule,
        HeaderModule,
    ],
    declarations: [
        HomeComponent,
        HomeFeaturesComponent,
        HomeMoreInfoComponent,
    ],
    exports: [
        HomeComponent,
    ],
})

export class HomeModule {}
