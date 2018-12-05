import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'autoSearch'
})
export class AutoSearchPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(args==null){
      return value
    }
    return value.filter(function(t){
      return t.name.toLowerCase().includes(args.toLowerCase())
    })
  }

}
