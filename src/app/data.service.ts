import { Injectable } from '@angular/core';
import { User} from './DataModel';
@Injectable()
export class DataService {

  snackArray: Array<string>;
  constructor() { }

  getSnacks()
  {
    this.snackArray=['Chicken Momos',
      'Crispy Chicken',
      'Chicken Croquettes',
      'Fish Fingers'
      ];

      return this.snackArray;
  }

  getUser()
  {
    return new User('1','dheeraj');
  }
}
