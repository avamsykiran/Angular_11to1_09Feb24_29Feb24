import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'inToWords'
})
export class InToWordsPipe implements PipeTransform {

  digits:string[];

  constructor(){
    this.digits=[
      "zero","one","two","three","four","five","six","seven","edight","nine"
    ];
  }

  transform(value: number): string|null {
    let result:string|null = null;

    if(value){
      let strVal = `${value}`;
      result="";
      for(let i=0;i<strVal.length;i++){
        let ch = strVal.charAt(i);
        result = `${result} ${ch=="."?"dot":this.digits[Number(ch)]}`;
      }
    }

    return result;
  }

}
