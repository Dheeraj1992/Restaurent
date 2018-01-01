import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  count:number =0;
  letsIncrementClick()
  {
    this.count++;
  }

  letsDecrementClick()
  {
    this.count++;
  }
}
