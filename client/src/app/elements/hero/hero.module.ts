import { NgModule } from "@angular/core";

import { HeroComponent } from "./components";

@NgModule({
    declarations: [
        HeroComponent,
    ],
    exports: [
        HeroComponent,
    ],
})

export class HeroModule {}
