import { NgModule } from '@angular/core';

import { SiteComponent } from './components';

@NgModule({
    declarations: [
        SiteComponent,
    ],
    exports: [
        SiteComponent,
    ]
})

export class SiteModule {}
