import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appFilterName'
})

export class CountriesFilterPipe implements PipeTransform {

    transform(items: any[], searchText: string, ): any[] {
        if (!items) {
          return [];
        }
        if (!searchText && !searchText) {
          return items;
        }
    
        if(searchText != undefined && searchText != null && searchText != ""){
            searchText = searchText.toLocaleLowerCase();
        }else{
            searchText = "";
        }
    
        return items.filter(it => {
            if(it.name != undefined){
                return (it.name.toLocaleLowerCase().includes(searchText));
            }
        });
      }

}