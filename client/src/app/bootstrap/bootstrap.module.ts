import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HomeModule } from '../pages/home';
import { FormModule } from '../elements/form';
import { ButtonModule } from '../elements/button';
import { BootstrapComponent } from './components';

@NgModule({
    imports: [
        BrowserModule,

        HomeModule,
        FormModule,
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
