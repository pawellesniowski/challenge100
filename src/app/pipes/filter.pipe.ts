import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(values: string[], keyword = ''): string[] {
    const regEx = new RegExp(keyword, 'i')
    return values.filter(val => regEx.test(val));
  }
}
