import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'referencia'
})
export class ReferenciaPipe implements PipeTransform {

  transform(value: string):string{

let result:string;
result="Ref-" + value;


return result;

  }

}
