import { Component, OnInit, Input } from '@angular/core';
import { accordionStateTrigger } from '../animations';

@Component({
  selector: 'accordion',
  template: `
    <ul>
        <h2 (click)="toggleState(accordionTabs)">{{accordionTabs.title}} <md-icon *ngIf="!switch">add</md-icon><md-icon *ngIf="switch">remove</md-icon></h2>
        <div class="accordion-content" *ngIf="accordionTabs.switch || switch" [@accordionState]>
          <ng-container *ngIf="accordionTabs.materials">
            <li>
              <span>{{accordionTabs.materials.cashmere}}%</span><br />cashmere
            </li>
            <li>
              <span>{{accordionTabs.materials.wool}}%</span><br />wool
            </li>
            <li>
              <span>{{accordionTabs.materials.modal}}%</span><br />modal
            </li>
          </ng-container>
          <li >{{accordionTabs.content}}</li>
        </div>
    </ul>
  `,
  styles: [],
  animations: [
    accordionStateTrigger
  ]
})
export class AccordionComponent implements OnInit {

  @Input() accordionTabs: any;
  switch:boolean = false;

  constructor() { }

  ngOnInit() {

  }

  toggleState(activeState) {
    this.switch = !this.switch;
    activeState.state == 'inactive' ? activeState.state = 'active' : activeState.state = 'inactive';

  }

}
