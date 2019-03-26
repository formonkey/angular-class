import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormModule } from '../elements';
import { BootstrapComponent } from './components';

@NgModule({
    imports: [
        BrowserModule,

        FormModule,
    ],
    declarations: [
        BootstrapComponent,
    ],
    bootstrap: [
        BootstrapComponent,
    ],
})

export class BootstrapModule {}
