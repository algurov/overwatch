import { Component, OnInit, Input } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import {HeroDialogComponent} from '../hero-dialog/hero-dialog.component';
@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  @Input() hero: any;
  fileNameDialogRef: MatDialogRef<HeroDialogComponent>;

  ngOnInit() {
  }

  constructor(private dialog: MatDialog) {}

  openDialog() {
    this.fileNameDialogRef = this.dialog.open(HeroDialogComponent, {data: {hero: this.hero}});
  }
}
