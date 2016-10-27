import {Component, OnInit, state, style, trigger, transition, animate, keyframes, group} from '@angular/core';

@Component({
  selector: 'app-myanimation',
  templateUrl: './myanimation.component.html',
  styleUrls: ['./myanimation.component.css'],
  animations: [
    trigger('move', [
      state('*', style({
        'transform': 'translateX(100%)',
        'opacity': '0',
        'background-color': 'deepskyblue'
      })),
      state('enter',
        style({
          'opacity': '1'
        })
      ),
      state('easeInSine', style({
        'opacity': '1'
      })),
      state('easeInOutBack', style({
        'opacity': '1'
      })),
      state('easeOutBack', style({
        'opacity': '1'
      })),
      state('easeInBack', style({
        'opacity': '1'
      })),
      transition('void => *', animate(1000, keyframes([
        style({'transform': 'scale(0)'}),
        style({'transform': 'scale(.5)'}),
        style({'transform': 'scale(1.1)'}),
        style({'transform': 'scale(.8)'}),
        style({'transform': 'scale(1) translateX(100%)', 'opacity': '0'})
      ]))),
      transition('* <=> enter', animate(`1s ease`)),
      transition('* <=> easeInSine', animate(`.5s .1s cubic-bezier(0.47, 0, 0.745, 0.715)`)),
      transition('* <=> easeInOutBack', animate(`.5s .1s cubic-bezier(0.68, -0.55, 0.265, 1.55)`)),
      transition('* <=> easeOutBack', animate(`.5s .1s cubic-bezier(0.175, 0.885, 0.32, 1.275)`)),
      transition('* <=> easeInBack', animate(`.5s .1s cubic-bezier(0.6, -0.28, 0.735, 0.045)`)),
    ])
  ]
})
export class MyanimationComponent implements OnInit {

  moveStyle = 'leave';
  toggle: boolean = true;

  constructor() {
  }

  ngOnInit() {

  }

  onToggle() {

    this.moveStyle = this.toggle ? 'enter' : 'leave';
    this.toggle = !this.toggle;
  }


  setMoveStyle(style) {
    if (this.moveStyle === 'leave') {
      this.moveStyle = style;
    } else {
      this.moveStyle = 'leave';
    }

  }

}
