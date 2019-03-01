import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BootstrapComponent } from './components';
import { HelloWorldModule } from "../elements";
import { HeaderModule } from "../shared/header";

@NgModule({
    imports: [
        BrowserModule,

        HeaderModule,
        HelloWorldModule,
    ],
    declarations: [
        BootstrapComponent,
    ],
    bootstrap: [
        BootstrapComponent,
    ],
})

export class BootstrapModule {}
