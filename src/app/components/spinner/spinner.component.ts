import { Component, Input, OnInit } from '@angular/core';
import { Loaders } from '../../models/models';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
})
export class SpinnerComponent implements OnInit {
  @Input() isLoading = false;
  @Input() loaderLook: Loaders = Loaders.loadingDots;

  loaders = Loaders;

  constructor() {}

  ngOnInit(): void {}
}
