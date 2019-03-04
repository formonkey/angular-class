import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './components';
import { BrandModule } from '../../../elements/brand';
import { SearchModule } from '../../../elements/search';
import { NavBarModule } from '../../../elements/nav-bar';

@NgModule({
    imports: [
        CommonModule,

        BrandModule,
        NavBarModule,
        SearchModule,
    ],
    declarations: [
        HeaderComponent,
    ],
    exports: [
        HeaderComponent,

        NavBarModule,
    ],
})

export class HeaderModule {}
