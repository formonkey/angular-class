import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderModule } from '../../shared/headers';
import { CardModule, JumbotronModule, NavBarModule } from '../../elements';
import { HomeComponent, HomeMoreComponent, HomeOverviewComponent } from './components';

@NgModule({
    imports: [
        CommonModule,

        CardModule,
        HeaderModule,
        NavBarModule,
        JumbotronModule,
    ],
    declarations: [
        HomeComponent,
        HomeMoreComponent,
        HomeOverviewComponent,
    ],
    exports: [
        HomeComponent,
    ],
})

export class HomeModule {}
