import { NgModule } from '@angular/core';

import { BlogComponent } from './components';

@NgModule({
    declarations: [
        BlogComponent,
    ],
    exports: [
        BlogComponent,
    ]
})

export class BlogModule {}
