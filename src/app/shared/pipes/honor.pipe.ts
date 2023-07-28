import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'honor'
})
export class HonorPipe implements PipeTransform {

  transform(honor: number): string {
    if (honor >= 0) {
      return "😇";
    } else {
      return "😈";
    }
  }

}
