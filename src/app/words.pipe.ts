import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'words'
})
export class WordsPipe implements PipeTransform {

  // transform(value: unknown, ...args: unknown[]): unknown {
  transform(value: string, wordsNb = 20): string {
    let result: string;
    const words = value.split(/\s+/);

    if (words.length > wordsNb) {
      result = words.slice(0, wordsNb).join(' ') + '...';
    } else {
      result = value;
    }

    return result;
  }

}
