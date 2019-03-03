import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './components';
import { BrandModule } from '../../elements/brand';
import { NavBarModule } from '../../elements/nav-bar';

@NgModule({
    imports: [
        CommonModule,

        BrandModule,
        NavBarModule,
    ],
    declarations: [
        HeaderComponent,
    ],
    exports: [
        HeaderComponent,
    ],
})

export class HeaderModule {}
