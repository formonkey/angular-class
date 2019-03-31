import { NgModule } from '@angular/core';

import { SiteComponent } from './components';
import { BlogModule } from '../../sites/blog';

@NgModule({
    imports: [
        BlogModule,
    ],
    declarations: [
        SiteComponent,
    ],
    exports: [
        SiteComponent,
    ]
})

export class SiteModule {}
