import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse',
})
export class ReversePipe implements PipeTransform {
  transform(s: string) {
    let r = '';
    for (let i = s.length; i; ) {
      r += s[--i];
    }
    return r;
  }
}
