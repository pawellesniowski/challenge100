import {
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Subject } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
} from 'rxjs/operators';

@Component({
  selector: 'app-debounce-search',
  templateUrl: './debounce-search.component.html',
  styleUrls: ['./debounce-search.component.scss'],
})
export class DebounceSearchComponent
  implements OnInit, OnDestroy {
  mySubject: Subject<string> = new Subject();
  searchedTerm: string = '';
  constructor() {}

  ngOnInit(): void {
    this.mySubject
      .pipe(debounceTime(100), distinctUntilChanged())
      .subscribe((val) =>
        console.log(
          'emit this value outside search component',
          val
        )
      );
  }

  ngOnDestroy() {
    // destroy subscription
  }

  handleInputChange() {
    this.mySubject.next(this.searchedTerm);
  }
}
