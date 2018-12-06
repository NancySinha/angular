import { Component, OnInit } from '@angular/core';
import{ trigger,state,transition,animate,style} from '@angular/animations'
@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.css'],
  animations:[
    trigger("growupAnimation",[state("kid",style({color:'red',transform:'scale(1)'})),
    state("elder",style({color:'orangered',transform:'scale(4)'})),
    transition('kid<=>elder',animate('300ms ease-in'))])
    ]

})
export class AnimationComponent implements OnInit {
deafultState: String= 'kid'
  constructor() { }

  ngOnInit() {
 }
    animateNow()
    {
      this.deafultState=this.deafultState=='elder'?'kid':'elder'
    }
   
}
