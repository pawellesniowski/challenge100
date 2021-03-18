import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'flattenArr',
  pure: false
})
export class FlattenArrPipe implements PipeTransform {

  transform(value: any, deep: number = Infinity): any {
    return value.flat(deep);
  }

}
