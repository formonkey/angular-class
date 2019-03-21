import {Component, Input} from "@angular/core";

@Component ({
    selector: 'cls-jumbotron',
    templateUrl: './jumbotron.component.html',
    styleUrls: [ './jumbotron.component.scss' ],
})

export class JumbotronComponent {
    @Input() public readonly color: string;
    @Input() public readonly text: string;
}
