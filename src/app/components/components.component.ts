import { Component } from '@angular/core';
import { Loaders } from '../models/models';


@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss'],
})
export class ComponentsComponent {
  loaders = Loaders;

  public accordionItems = [
    {
      title: 'Example 1',
      content: 'Example content 1',
      isExtended: false,
    },
    {
      title: 'Example 2',
      content: 'Example content 2',
      isExtended: false,
    },
  ];
}
