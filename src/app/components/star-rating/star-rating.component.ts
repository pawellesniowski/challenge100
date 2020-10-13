import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss'],
})
export class StarRatingComponent implements OnInit {
  @Input() rate = 5;
  rateStars: number[];
  starsLimit = 5;

  constructor() {}

  ngOnInit(): void {
    this.rateStars = this.convertToRateStars(this.rate);
  }

  convertToRateStars(
    numberOfStars,
    arrayOfStars = []
  ): number[] {
    if (arrayOfStars.length === this.starsLimit) {
      return arrayOfStars;
    }

    if (numberOfStars >= 1) {
      arrayOfStars.push(1);
      return this.convertToRateStars(
        numberOfStars - 1,
        arrayOfStars
      );
    }

    if (numberOfStars > 0) {
      arrayOfStars.push(numberOfStars);
      return this.convertToRateStars(
        numberOfStars - numberOfStars,
        arrayOfStars
      );
    }

    arrayOfStars.push(numberOfStars);
    return this.convertToRateStars(
      numberOfStars,
      arrayOfStars
    );
  }
}
