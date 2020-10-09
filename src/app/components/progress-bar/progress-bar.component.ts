import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss'],
})
export class ProgressBarComponent implements OnInit {
  @Input() public progress = 0;

  constructor() {}

  increase(): void {
    this.progress < 100
      ? (this.progress = this.progress + 10)
      : (this.progress = 0);
  }

  ngOnInit(): void {}
}
