import { Component, Input } from '@angular/core';

import { Background, backgroundEnum } from '../../../shared/enums';

@Component({
    selector: 'cls-jumbotron',
    templateUrl: './jumbotron.component.html',
    styleUrls: [ './jumbotron.component.scss' ],
})

export class JumbotronComponent {
    @Input() public readonly title: string;
    @Input() public readonly backgroundColor: Background = backgroundEnum.light;
}
