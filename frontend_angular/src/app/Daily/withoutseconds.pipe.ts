import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'timeWithoutSeconds' })
export class TimeWithoutSecondsPipe implements PipeTransform {
    transform(value: string): string {
        const [hours, minutes] = value.split(':');
        return `${hours}:${minutes}`;
    }
}