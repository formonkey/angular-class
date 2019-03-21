import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {HomeModule} from "../pages/home";
import { BootstrapComponent } from './components';

@NgModule({
    imports: [
        BrowserModule,

        HomeModule,
    ],
    declarations: [
        BootstrapComponent,
    ],
    bootstrap: [
        BootstrapComponent,
    ],
})

export class BootstrapModule {}
