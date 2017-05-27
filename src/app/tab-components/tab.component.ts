import { Component, Input, OnInit } from '@angular/core';
import { tabStateTrigger } from '../animations';

@Component({
  selector: 'tab',
  template: `
    <div @tabState *ngIf="active" class="tab-state">
      <ng-content></ng-content>
    </div>
  `,
  styles: [],
  animations: [
    tabStateTrigger
  ]
})
export class TabComponent implements OnInit {

  @Input('tabInfo') tabClass:any;
  @Input() active:boolean = false;

  constructor() {

  }

  ngOnInit() {
  }

}
