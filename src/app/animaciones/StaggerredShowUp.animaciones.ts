import { trigger, style, transition, animate, state, stagger, query, keyframes } from "@angular/animations";

export const stragershowUp = trigger('stragershowUp', [
    transition('* => *', [
        query(':enter', stagger('80ms', [
            animate('0.4s ease-out', keyframes([
                style({
                    transform: 'translateX(-100px)',
                    opacity: '0',
                    offset: 0
                }),
                style({
                    transform: 'translateX(50px)',
                    opacity: '1',
                    offset: 0.5
                }),
                style({
                    transform: 'translateX(0px)',
                    opacity: '1',
                    offset: 1
                })
            ]))
        ]), {optional: true})
    ])
]);