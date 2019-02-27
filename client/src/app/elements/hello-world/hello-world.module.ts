import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TextToBinaryPipe } from '../../shared/pipes';
import { HelloWorldComponent, HelloWorldDescriptionComponent, HelloWorldListComponent } from './components';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        TextToBinaryPipe,
        HelloWorldComponent,
        HelloWorldListComponent,
        HelloWorldDescriptionComponent,
    ],
    exports: [
        HelloWorldComponent,
    ],
})

export class HelloWorldModule {}
