import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(items: any[], filter: any): any {
    if (!items || !filter) {
      return items;
    }
    return items.filter(item => item.name.toLowerCase().indexOf(filter.toLowerCase()) !== -1);
  }

}
