import { Component, Input, ViewChildren, ContentChildren, QueryList, ElementRef, Renderer, AfterViewInit, AfterContentInit } from '@angular/core';
import { TabComponent } from './tab.component';

@Component({
  selector: 'tabset',
  template: `
    <div class="tab-set">
      <ul class="tab-header">
        <li
          *ngFor="let header of tabClass; let i = index"
          [class.active]="header.active"
          #activeTrigger>
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
export class TabsetComponent implements AfterViewInit, AfterContentInit {

  @Input('tabHeader') tabClass:any;
  @ViewChildren('activeTrigger') activeTrigger: QueryList<ElementRef>;
  @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;

  constructor(private renderer: Renderer) { }

  ngAfterViewInit() {
    const activeClass = this.activeTrigger.toArray();
    const lastItem = activeClass.length - 1;

    if(activeClass.length > 0) {
      this.renderer.setElementClass(activeClass[lastItem].nativeElement, "active", true);
    }
  }

  ngAfterContentInit() {
    const tabset = this.tabs.toArray();
    const actives = this.tabs.filter(t => { return t.active });
    let lastItem = tabset.length - 1;

    setTimeout(() => {
      if(actives.length > 1) {
        console.error(`Multiple active tabs set 'active'`);
      } else if(!actives.length && tabset.length) {
        tabset[lastItem].active = true;
      }
    }, 300);
  }

  tabClicked(header, i) {
    const tabset = this.tabs.toArray();
    const activeClass = this.activeTrigger.toArray();
    tabset.forEach(tab => tab.active = false);
    activeClass.forEach(active => this.renderer.setElementClass(active.nativeElement, "active", false));
    // header.active = true;
    this.renderer.setElementClass(activeClass[i].nativeElement, "active", true);
    tabset[i].active = true;
  }

}
