import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'tab',
  template: `
    <ng-content *ngIf="active"></ng-content>
  `,
  styles: []
})
export class TabComponent implements OnInit {

  @Input('tabInfo') tabClass:any;
  @Input() active:boolean = true;

  constructor() {

  }

  ngOnInit() {
  }

}
