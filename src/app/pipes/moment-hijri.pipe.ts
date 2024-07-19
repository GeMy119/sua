// src/app/hijri-date.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';
import 'moment-hijri';

@Pipe({
  name: 'hijriDate'
})
export class HijriDatePipe implements PipeTransform {

  transform(date: string | Date, format: string = 'iYYYY/iM/iD'): string {
    if (!date) return '';

    // Convert the input date to a moment object
    const gregorianDate = moment(date);

    // Check if the input date is valid
    if (!gregorianDate.isValid()) {
      return 'Invalid date';
    }

    // Convert to Hijri date using moment-hijri
    const hijriDate = gregorianDate.format(format);

    return hijriDate;
  }
}
