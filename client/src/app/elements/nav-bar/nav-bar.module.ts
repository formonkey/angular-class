import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavBarComponent } from './components';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        NavBarComponent,
    ],
    exports: [
        NavBarComponent
    ],
})

export class NavBarModule {}
