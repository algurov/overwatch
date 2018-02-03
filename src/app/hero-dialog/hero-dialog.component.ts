import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-hero-dialog',
  templateUrl: './hero-dialog.component.html',
  styleUrls: ['./hero-dialog.component.scss']
})
export class HeroDialogComponent implements OnInit {
  hero: any;
  constructor(
    public dialogRef: MatDialogRef<HeroDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.hero = data.hero;
  }
  ngOnInit() {}

}
