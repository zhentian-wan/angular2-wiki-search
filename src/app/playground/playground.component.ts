import {Component, OnInit, OnDestroy} from '@angular/core';
import {ViewChild} from "@angular/core/src/metadata/di";
import {Observable, Subscription} from "rxjs";
import 'rxjs/operator/takeUntil';

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

  position;
  ballSub$: Subscription;
  dadSub$: Subscription;

  constructor() {
  }

  ngOnDestroy() {
    this.ballSub$.unsubscribe();
    this.dadSub$.unsubscribe();
  }

  ngOnInit() {
    this.btnsMove();
    this.dragAndDrog();
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
    const mouseup$ = Observable.fromEvent(document, 'mouseup');
    const mousedown$ = Observable.fromEvent(ball, 'mousedown');
    const mousemove$ = Observable.fromEvent(document, 'mousemove');

    this.dadSub$ = mousedown$
      .switchMap(e => mousemove$.takeUntil(mouseup$))
      .subscribe(
        p => {
          this.position = {
            x: p.clientX - 50,
            y: p.clientY - 50
          }
        }
      );
  }

}
