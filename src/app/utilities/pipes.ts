import { Pipe, PipeTransform } from '@angular/core';
/*
 * Changes the date format to something beyond what's provided.
 * Usage:
 *   value | specialDate
 * Example:
 *   {{ 06/01/2019 | Mon Jul 01 2019, Right? }}
 *   formats to: 1024
*/

@Pipe({name: 'specialDate'})
export class specialDatePipe implements PipeTransform {
  transform(value: Date): string {
    return value.toDateString() + ", Right?";
  }
}
