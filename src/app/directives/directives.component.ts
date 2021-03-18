import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss'],
})
export class DirectivesComponent implements OnInit {
  constructor() {}
  noOfClicks: number = 0;

  ngOnInit(): void {
    console.log('DirectivesComponent loaded');
  }

  handleDebouncedClicks() {
    this.noOfClicks++;
  }
}
