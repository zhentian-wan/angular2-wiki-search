import {Component, OnInit, OnDestroy} from '@angular/core';
import {ViewChild} from "@angular/core/src/metadata/di";
import {Observable, Subscription} from "rxjs";

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent implements OnInit, OnDestroy {

  @ViewChild('right') right;
  @ViewChild('left') left;

  position;
  ballSub$: Subscription;

  constructor() {
  }

  ngOnDestroy(){
    this.ballSub$.unsubscribe();
  }

  ngOnInit() {
    const rightBtn = this.right.nativeElement;
    const leftBtn = this.left.nativeElement;
    const rightClick$ = Observable.fromEvent(rightBtn, 'click')
      .map(event => 10);
    const leftClick$ = Observable.fromEvent(leftBtn, 'click')
      .map(event => -10);

    this.ballSub$ = Observable.merge(rightClick$, leftClick$)
      .startWith({
        x: 100,
        y: 100
      })
      .scan((acc, curr) => {
        // acc: position
        // curr: 10 / -10
        return {
          y: acc.y,
          x: acc.x + curr
        }
      })
      .subscribe(
        p => this.position = p
      )
  }

}
