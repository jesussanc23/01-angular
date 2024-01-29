import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'decimeters',
  standalone: true
})
export class DecimetersPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    return `${value * 10} decimeters`;
  }

}
