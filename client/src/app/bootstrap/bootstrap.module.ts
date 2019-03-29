import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BootstrapComponent } from './components';
import { HeaderComponent } from '../shared/header/components';

@NgModule({
    imports: [
        BrowserModule,
    ],
    declarations: [
        BootstrapComponent,
        HeaderComponent
    ],
    bootstrap: [
        BootstrapComponent
    ]
})

export class BootstrapModule {}
