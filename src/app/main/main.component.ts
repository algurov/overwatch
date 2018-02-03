import { Component, OnInit } from '@angular/core';
import {DataService} from '../service/data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  filterString = '';
  currentPage = 0;
  scrollCallback;
  heroes: Array<any> = [];
  needToLoad = true;
  constructor(private dataService: DataService) {

  }

  getHeroes() {
    if (this.needToLoad) {
      if (this.currentPage > 0) {
        this.dataService.lockUi();
      }
      return this.dataService.hero(this.currentPage).do(this.processData);
    }
  }

  private processData = (heroes) => {
    this.currentPage++;
    let _json = JSON.parse(heroes);
    let lengthBefore = this.heroes.length;
    this.heroes = this.heroes.concat(_json.results.items);
    let lengthAfter = this.heroes.length;
    if (lengthAfter === lengthBefore) {
      this.needToLoad = false;
    }
    this.dataService.unlockUi();
  }

  ngOnInit() {
    this.scrollCallback = this.getHeroes.bind(this);
  }

  changeFilterString(event) {
    this.filterString = event.target.value;
  }

}
