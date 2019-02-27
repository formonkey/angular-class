import { NgModule } from "@angular/core";

import {TextToBinaryPipe} from "../../shared/pipes";
import {HelloWorldComponent, HelloWorldDescriptionComponent} from "./components";
import {HelloWorldListComponent} from "./components/list";
import {CommonModule} from "@angular/common";

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
