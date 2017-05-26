import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'tabset',
  template: `
    <div class="tab-set">
      <ul>
        <li
          *ngFor="let header of tabClass"
          [class.active]="header.active">
          <a
            (click)="tabClicked(header)"
            class="tab-btn">
            <span>{{header.title}}</span>
          </a>
        </li>
      </ul>
      <div class="tab-content">
        <ng-content></ng-content>
      </div>
    </div>
  `,
  styles: []
})
export class TabsetComponent implements OnInit {

  @Input('tabHeader') tabClass:any;

  constructor() { }

  ngOnInit() {
    console.log(this.tabClass);
  }

  tabClicked(tab) {
    // const tabs = this.tabs.toArray();
    //
    // tabs.forEach(tab => tab.active = false);
    // tab.active = true;

  }

}
