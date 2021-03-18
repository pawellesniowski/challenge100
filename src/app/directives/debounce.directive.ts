import { Directive, HostListener, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';

@Directive({
  selector: '[appDebounce]'
})
export class DebounceDirective implements OnInit, OnDestroy{
  @Output() debouncedEvent = new EventEmitter();
  private clickEvent = new Subject();

  subscription: Subscription;

  @HostListener('click', ['$event'])
  onClick(event) {
    event.preventDefault();
    event.stopPropagation();
    this.clickEvent.next(event);
  }

  ngOnInit(){
    this.subscription = this.clickEvent.pipe(
      debounceTime(500),
      map(e=> this.debouncedEvent.emit(e)),
    ).subscribe()
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }
}
