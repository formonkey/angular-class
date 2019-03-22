import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonComponent } from './component';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        ButtonComponent,
    ],
    exports: [
        ButtonComponent,
    ]
})

export class ButtonModule {}
