import { Component, ViewChildren, QueryList, ElementRef, Renderer, AfterViewInit } from '@angular/core';
import { AccordionComponent } from './accordion/accordion.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  tabSet: any[] = [
      {
        title: "Fit guide",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nibh arcu, ultricies nec purus quis, consequat luctus orci. Sed non mi nisi. Donec vulputate erat odio, eget lacinia lectus accumsan sed. Phasellus diam lorem, ullamcorper quis velit a, ultricies facilisis turpis. Sed laoreet efficitur odio, ut consequat arcu iaculis non. Quisque lectus ligula, venenatis quis ullamcorper vitae, euismod in nisi. Sed sed arcu tortor. Phasellus a iaculis metus, sed suscipit dui. Nunc mollis, ipsum at tristique dignissim, enim mi sodales nulla, sed dapibus lorem tortor et nisi."
      },
      {
        title: "Care",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nibh arcu, ultricies nec purus quis, consequat luctus orci. Sed non mi nisi. Donec vulputate erat odio, eget lacinia lectus accumsan sed. Phasellus diam lorem, ullamcorper quis velit a, ultricies facilisis turpis. Sed laoreet efficitur odio, ut consequat arcu iaculis non. Quisque lectus ligula, venenatis quis ullamcorper vitae, euismod in nisi. Sed sed arcu tortor. Phasellus a iaculis metus, sed suscipit dui. Nunc mollis, ipsum at tristique dignissim, enim mi sodales nulla, sed dapibus lorem tortor et nisi."
      },
      {
        title: "Materials",
        materials: {
          cashmere: 50,
          wool: 46,
          modal: 4
        },
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nibh arcu, ultricies nec purus quis, consequat luctus orci. Sed non mi nisi. Donec vulputate erat odio, eget lacinia lectus accumsan sed. Phasellus diam lorem, ullamcorper quis velit a, ultricies facilisis turpis. Sed laoreet efficitur odio, ut consequat arcu iaculis non. Quisque lectus ligula, venenatis quis ullamcorper vitae, euismod in nisi. Sed sed arcu tortor. Phasellus a iaculis metus, sed suscipit dui. Nunc mollis, ipsum at tristique dignissim, enim mi sodales nulla, sed dapibus lorem tortor et nisi."
      }
  ];

  @ViewChildren(AccordionComponent) accordion: QueryList<AccordionComponent>;

  constructor() {

  }

  ngAfterViewInit() {
    const accordionList = this.accordion.toArray();
    const lastItem = accordionList.length - 1;
    let w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    setTimeout(() => {
      if (w < 515) {
        accordionList[lastItem].switch = true;
      }
    }, 300);
  }
}
