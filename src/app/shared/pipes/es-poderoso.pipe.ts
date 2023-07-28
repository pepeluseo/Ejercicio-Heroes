import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'esPoderoso'
})
export class EsPoderosoPipe implements PipeTransform {

  transform(poder: number): string {
    return (poder >= 250 ? 'Es poderoso': 'Es normalito');
  }

}
