import { NgModule } from "@angular/core";

import { CardComponent } from "./components";

@NgModule({
    declarations: [
        CardComponent,
    ],
    exports: [
        CardComponent
    ],
})

export class CardModule {}
