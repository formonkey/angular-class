import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { TextToBinaryPipe } from "../../shared/pipes";
import { HelloWorldListComponent } from "./components/list";
import { HelloWorldComponent, HelloWorldDescriptionComponent } from "./components";

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        TextToBinaryPipe,
        HelloWorldComponent,
        HelloWorldListComponent,
        HelloWorldDescriptionComponent,
    ],
    exports: [
        HelloWorldComponent,
    ]
})

export class HelloWorldModule {}
