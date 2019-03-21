import { Component, Input } from "@angular/core";

@Component({
    selector: 'cls-button',
    templateUrl: './button.component.html',
    styleUrls: [ './button.component.sass' ]
})

export class ButtonComponent {
    @Input() public readonly clazz: string;
    @Input() public readonly isDisabled: boolean;
    @Input() public readonly isLoading: boolean;
}
