import { Component, OnInit } from '@angular/core';
import {DataService} from '../service/data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  test() {
    this.dataService.testApi().subscribe(res => {console.log(res)});
  }

}
