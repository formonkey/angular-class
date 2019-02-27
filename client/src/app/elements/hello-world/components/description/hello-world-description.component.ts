import { Component, Input } from '@angular/core';

@Component({
    selector: 'cls-hello-world-description',
    templateUrl: './hello-world-description.component.html',
    styleUrls: [ './hello-world-description.component.scss' ],
})

export class HelloWorldDescriptionComponent {
    @Input() public readonly text: string;
}
