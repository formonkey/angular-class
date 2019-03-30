import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BootstrapComponent } from './components';
import { HelloWorldModule } from "../elements/hello-world";

@NgModule({
    imports: [
        BrowserModule,
    ],
    declarations: [
        BootstrapComponent,
    ],
    bootstrap: [
        BootstrapComponent,
    ],
})

export class BootstrapModule {}
