import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeModule } from '../../sites';
import { HeaderModule } from '../../shared';
import { SiteComponent, SiteMenuComponent } from './components';
import {ButtonModule} from "../../elements/button";

@NgModule({
    imports: [
        CommonModule,

        ButtonModule,
        HeaderModule,
    ],
    declarations: [
        SiteComponent,
        SiteMenuComponent,
    ],
    exports: [
        SiteComponent,
    ],
})

export class SiteModule {}
