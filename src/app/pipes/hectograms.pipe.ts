import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hectograms',
  standalone: true
})
export class HectogramsPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    return `${value * 10} hectograms`;
  }

}
