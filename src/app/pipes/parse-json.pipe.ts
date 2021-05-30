import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'parseJson',
})
export class ParseJsonPipe implements PipeTransform {
  transform(birthDateJSON: string): Date {
    if (!birthDateJSON) {
      return new Date();
    }
    return new Date(JSON.parse(birthDateJSON));
  }
}
