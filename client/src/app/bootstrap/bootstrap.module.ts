import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SiteModule } from '../pages/site';
import { BootstrapComponent } from './components';

@NgModule({
    imports: [
        BrowserModule,

        SiteModule,
    ],
    declarations: [
        BootstrapComponent,
    ],
    bootstrap: [
        BootstrapComponent,
    ],
})

export class BootstrapModule {}
