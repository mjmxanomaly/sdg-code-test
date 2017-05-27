import { trigger, state, style, group, keyframes, transition, animate } from '@angular/animations';

export const tabStateTrigger = trigger('tabState', [
  transition(':enter', [
    style({
      opacity: 0
    }),
    animate(500, style({
      opacity: 1
    }))
  ]),
  transition(':leave', animate(50, style({
    opacity: 0
  })))
])

export const accordionStateTrigger = trigger('accordionState', [
  transition(':enter', [
    style({
      opacity: 0
    }),
    animate(500, style({
      opacity: 1
    }))
  ]),
  transition(':leave', animate(500, style({
    opacity: 0
  })))
])
