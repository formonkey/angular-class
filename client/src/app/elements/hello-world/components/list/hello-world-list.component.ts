import { Component, Input } from '@angular/core';

@Component({
    selector: 'cls-hello-world-list',
    templateUrl: './hello-world-list.component.html',
    styleUrls: [ './hello-world-list.component.scss' ],
})

export class HelloWorldListComponent {
    @Input() public readonly items: number[];

    public onSelected(item: number, index: number) {
        this.items[index] += 10;
    }
}
