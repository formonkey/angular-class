import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TextToBinaryPipe } from '../../shared/pipes';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        TextToBinaryPipe,
      
    ],
    exports: [
    ],
})

export class NavBarModule {}
