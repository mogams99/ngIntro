import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom',
  standalone: true
})
export class CustomPipe implements PipeTransform {

  transform(value: string, limit: number = value.length): string {
    return value.substring(0, limit).toUpperCase() + value.substring(limit);
  }}
