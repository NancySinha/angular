import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberSortPipe'
})
export class NumberSortPipePipe implements PipeTransform {
sortNumbers = function(first,second){
  console.log("recvd"+ "and" +second)
  return first - second
}
  transform(value: any, args?: any): any {
    return value.sort(this.sortNumbers);
  }

}
