import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
})
export class TruncatePipe implements PipeTransform {
  transform(value: string, maxLength: number = 20): string {
    return value.length > maxLength + 3
      ? `${value.slice(0, maxLength - 3)}...`
      : value;
  }
}
