import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
    name: 'text2Binary'
})

export class TextToBinaryPipe implements PipeTransform {
    transform(value: string): string {
        return value.split('')
            .map((char) => char.codePointAt(0).toString(2))
            .join(' ');
    }
}
