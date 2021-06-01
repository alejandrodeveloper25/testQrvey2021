import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})

export class CountriesOrderPipe implements PipeTransform {
    transform(items: any[], field: string, ): any[] {
        
        items.sort((a: any, b: any) => {
            if (a[field] < b[field]) {
              return -1;
            } else if (a[field] > b[field]) {
              return 1;
            } else {
              return 0;
            }
          });
    
        return items;
      }
}