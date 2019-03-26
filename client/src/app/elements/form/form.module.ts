import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { FormComponent } from './components';

@NgModule({
    imports: [
        CommonModule,

        ReactiveFormsModule,
    ],
    declarations: [
        FormComponent,
    ],
    exports: [
        FormComponent,
    ],
})

export class FormModule {}
