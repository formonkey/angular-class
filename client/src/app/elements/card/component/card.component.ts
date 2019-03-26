import { Component, Input } from '@angular/core';

@Component({
    selector: 'cls-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss'],
})

export class CardComponent {
    @Input() public readonly hasText: boolean = true;
    @Input() public readonly inLine: boolean;
}
