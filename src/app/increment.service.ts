import { Injectable } from '@angular/core';

@Injectable()
export class IncrementService {

  text:string;
  count:number =1;
  letsIncrementClick()
  {
    this.count++;
  }

  letsDecrementClick()
  {
    if(this.count>1)
    this.count--;
  }

  changeText()
  {
    this.text= this.text.toUpperCase();
  }
}
