import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public title = 'challenge100';
  public accordionItems = [
    { title: 'Example 1', content: 'Example content 1', isExtended: false },
    { title: 'Example 2', content: 'Example content 2', isExtended: false },
  ];
}
