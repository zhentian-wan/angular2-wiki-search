import {Component, OnInit, OnDestroy} from '@angular/core';
import {ViewChild} from "@angular/core/src/metadata/di";
import {Observable, Subscription} from "rxjs";
import 'rxjs/operator/takeUntil';
import {fromTo} from 'gsap';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent implements OnInit, OnDestroy {

  @ViewChild('right') right;
  @ViewChild('left') left;
  @ViewChild('up') up;
  @ViewChild('down') down;
  @ViewChild('ball') ball;
  @ViewChild('canvas') canvas;

  position;

  ballSub$: Subscription;
  dadSub$: Subscription;

  msg1;
  msg2;

  constructor() {
    this.msg1 = {
      name: "Zhentian",
      skills: ["JS", "Angular"]
    };
    this.msg2 = {
      name: "Wan",
      skills: ["JSX", "React"]
    };
  }

  ngOnDestroy() {
    this.ballSub$.unsubscribe();
    this.dadSub$.unsubscribe();

  }

  ngOnInit() {
    this.btnsMove();
    this.dragAndDrog();
    this.animate()
  }

  btnsMove() {
    const rightBtn = this.right.nativeElement;
    const leftBtn = this.left.nativeElement;
    const upBtn = this.up.nativeElement;
    const downBtn = this.down.nativeElement;
    const rightClick$ = Observable.fromEvent(rightBtn, 'click')
      .map(event => ({x: 10, y: 0}));
    const leftClick$ = Observable.fromEvent(leftBtn, 'click')
      .map(event => ({x: -10, y: 0}));
    const upClick$ = Observable.fromEvent(upBtn, 'click')
      .map(event => ({x: 0, y: -10}));
    const downClick$ = Observable.fromEvent(downBtn, 'click')
      .map(event => ({x: 0, y: 10}));

    this.ballSub$ = Observable.merge(rightClick$, leftClick$, upClick$, downClick$)
      .startWith({
        x: 100,
        y: 100
      })
      .scan((acc, curr) => {
        // acc: position
        // curr: 10 / -10
        return {
          y: acc.y + curr.y,
          x: acc.x + curr.x
        }
      })
      .subscribe(
        p => this.position = p
      )
  }

  dragAndDrog() {
    const ball = this.ball.nativeElement;
    const enter$ = Observable.fromEvent(ball, 'mouseenter');
    const mouseup$ = Observable.fromEvent(document, 'mouseup');
    const mousedown$ = Observable.fromEvent(ball, 'mousedown');
    const mousemove$ = Observable.fromEvent(document, 'mousemove');

    this.dadSub$ =
      enter$
        .switchMap(e => mousedown$)
        .switchMap(e => mousemove$.takeUntil(mouseup$))
        .subscribe(
          (p: MouseEvent) => {
            this.position = {
              x: p.clientX - 50,
              y: p.clientY - 50
            }
          }
        );
  }

  animate() {
    const mousedown$ = Observable.fromEvent(this.canvas.nativeElement, 'click');
    mousedown$
      .map((e: MouseEvent) => ({x: e.clientX - 50, y: e.clientY - 50}))
      .startWith(
        {
          x: 100,
          y: 100
        }
      )
      .pairwise(2)
      .map((p: MouseEvent) => {
        const p1 = p[0];
        const p2 = p[1];
        return {x1: p1.x, y1: p1.y, x2: p2.x, y2: p2.y};
      })
      .subscribe(
        (p: any) => {
          fromTo(this.ball.nativeElement, 0.5,
            {
              left: p['x1'], top: p['y1']
            },
            {
              left: p['x2'], top: p['y2']
            }
          )
        }
      )
  }
}
