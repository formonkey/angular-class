import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HomeModule } from '../pages/home';
import { ButtonModule } from '../elements/button';
import { BootstrapComponent } from './components';

@NgModule({
    imports: [
        BrowserModule,

        HomeModule,
        ButtonModule,
    ],
    declarations: [
        BootstrapComponent,
    ],
    bootstrap: [
        BootstrapComponent,
    ],
})

export class BootstrapModule {
}
