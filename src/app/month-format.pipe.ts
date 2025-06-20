import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'monthFormat'
})
export class MonthFormatPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return '';
    else if (value == 'Current')
      return value
    const [year, month] = value.split('-');
    const date = new Date(+year, +month - 1);
    return date.toLocaleDateString('default', { month: 'short', year: 'numeric' });
  }
}
