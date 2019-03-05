import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TextToBinaryPipe } from '../../shared/pipes';
import { HeaderComponent } from '../../shared/header/header.component';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        TextToBinaryPipe,
        HeaderComponent
      
    ],
    exports: [
    ],
})

export class HeaderModule {}