import { Component, Input } from '@angular/core';

import { colorsEnum, Colors } from '../../../shared/enums';

@Component({
    selector: 'cls-nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrls: [ './nav-bar.component.scss' ],
})

export class NavBarComponent {
    @Input() public readonly color: Colors = colorsEnum.light;
}
