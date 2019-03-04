import { Component } from '@angular/core';

import { MORE_INFO } from '../../constants';

@Component({
    selector: 'cls-home-more',
    templateUrl: './home-more.component.html',
    styleUrls: [ './home-more.component.scss' ],
})

export class HomeMoreComponent {
    public readonly model: { title: string }[] = MORE_INFO;
}
