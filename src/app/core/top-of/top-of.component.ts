import {
  Component,
  Directive,
  HostListener,
  OnInit,
} from '@angular/core';
import { ViewportScroller } from '@angular/common';

// tslint:disable-next-line:directive-selector
@Directive({ selector: 'button[counting]' })
export class CountClicksDirective {
  numberOfClicks = 0;

  @HostListener('click', ['$event.target'])
  onClick(btn): void {
    console.log(
      'BUTTON CLICKS: ',
      btn,
      this.numberOfClicks++
    );
  }
}

@Component({
  selector: 'app-top-of',
  templateUrl: './top-of.component.html',
  styleUrls: ['./top-of.component.scss'],
})
export class TopOfComponent implements OnInit {
  constructor(private scroller: ViewportScroller) {}
  isVisible = false;

  ngOnInit(): void {}

  @HostListener('window:scroll')
  onScroll(): void {
    const [, posY] = this.getPosition();
    this.isVisible = posY > 500;
    console.log('scrolling!!', posY);
  }

  getPosition(): any {
    return this.scroller.getScrollPosition();
  }

  goToTop(): void {
    this.scroller.scrollToPosition([0, 0]);
  }
}
