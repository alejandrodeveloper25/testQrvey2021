import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appFilterName'
})

export class CountriesFilterPipe implements PipeTransform {

    transform(items: any[], textFilter: string ): any[] {
        if (!items) {
          return [];
        }
        if (!textFilter && !textFilter) {
          return items;
        }
    
        if(textFilter != undefined && textFilter!= null && textFilter != ""){
          textFilter = textFilter.toLocaleLowerCase();
        }else{
          textFilter = "";
        }
        return items.filter(it => {
            if(it.name != undefined){
              return (it.name.toLocaleLowerCase().includes(textFilter)); 
            }
        });
      }

}