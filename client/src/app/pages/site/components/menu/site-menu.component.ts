import { Component } from '@angular/core';

import { SITE_MENU_ITEMS } from '../../constants';

@Component({
    selector: 'cls-site-menu',
    templateUrl: './site-menu.component.html',
    styleUrls: [ './site-menu.component.scss' ],
})

export class SiteMenuComponent {
    public readonly model: { class: string, children: string[] }[] = SITE_MENU_ITEMS;
}
