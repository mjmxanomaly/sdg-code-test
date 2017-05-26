import { Component, Input, ContentChildren, QueryList, AfterContentInit } from '@angular/core';
import { TabComponent } from './tab.component';

@Component({
  selector: 'tabset',
  template: `
    <div class="tab-set">
      <ul>
        <li
          *ngFor="let header of tabClass; let i = index"
          [class.active]="header.active">
          <a
            (click)="tabClicked(header, i)"
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
export class TabsetComponent implements AfterContentInit {

  @Input('tabHeader') tabClass:any;

  @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;

  constructor() { }

  ngAfterContentInit() {
    const tabset = this.tabs.toArray();
    const actives = this.tabs.filter(t => { return t.active });

    setTimeout(() => {
      if(actives.length > 1) {
        console.error(`Multiple active tabs set 'active'`);
      } else if(!actives.length && tabset.length) {
        tabset[0].active = true;
      }
    }, 300);
  }

  tabClicked(header, i) {
    const tabset = this.tabs.toArray();
    tabset.forEach(tab => tab.active = false);
    tabset[i].active = true;
  }

}
