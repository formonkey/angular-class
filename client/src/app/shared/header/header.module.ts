import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './components';
import { NavBarModule } from '../../elements/nav-bar';

@NgModule({
    imports: [
        CommonModule,
        NavBarModule
    ],
    declarations: [
        HeaderComponent
      
    ],
    exports: [
        HeaderComponent
    ],
})

export class HeaderModule {}