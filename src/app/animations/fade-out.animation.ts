import { trigger, animate, transition, style } from '@angular/animations';

export const fadeOutAnimation =

    trigger('fadeOutAnimation', [

        transition('* => void', [
            style({ opacity: 1 }),
            animate('0.4s', style({ opacity: 0 }))
        ])

    ]);