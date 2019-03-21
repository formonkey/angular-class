import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeModule } from '../../sites';
import { HeaderModule } from '../../shared';
import { SiteComponent, SiteMenuComponent } from './components';

@NgModule({
    imports: [
        CommonModule,

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
