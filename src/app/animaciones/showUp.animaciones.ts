import { trigger, style, transition, animate, state } from '@angular/animations';

export const showUp = trigger('showUp', [
    state('0', style({
      maxHeight: '40px',
      backgroundColor: 'blue',
      transform: 'scale(1)'
    })),
    state('1', style({
      backgroundColor: 'red',
      maxHeight: '700px'
    })),
    transition('0 => 1', animate('1s ease-out', style({
      transform: 'scale(1.2)',
      border: 'solid 1px' 
    }))),
    transition('1 => 0', animate('1s ease-in'))
  ])