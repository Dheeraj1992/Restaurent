import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { User} from '../DataModel';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  snackArray: string[];
  constructor(private dataService: DataService) { 
    this.snackArray= dataService.getSnacks();
    console.log(JSON.stringify(this.snackArray));
    this.user =this.dataService.getUser();
    console.log(JSON.stringify(this.user));
  }
  user: User;
  ngOnInit() {
    

  }

 

}
