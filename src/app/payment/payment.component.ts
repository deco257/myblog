import { Component } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
  animations:[
    trigger('fade',[
      transition('void=>*',[
        style({background:'red',opacity:0}),
        animate(2000, style({ background:'blue',opacity:1}))
      ])
    ])
  ]
})
export class PaymentComponent {



}
