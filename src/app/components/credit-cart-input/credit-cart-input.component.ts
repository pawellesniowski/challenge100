import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { cardTypes } from './credit-card-input.constatns';

@Component({
  selector: 'app-credit-cart-input',
  templateUrl: './credit-cart-input.component.html',
  styleUrls: ['./credit-cart-input.component.scss'],
})
export class CreditCartInputComponent implements OnInit {
  @Input() creditCardNumber = '';
  @Output() formattedNumber = new EventEmitter<string>();

  private isreadonly = false;
  get isReadOnly(): boolean {
    return this.isreadonly;
  }

  @Input() set isReadOnly(value: boolean) {
    console.log(
      'this.creditCardNumber:',
      this.creditCardNumber
    );
    this.creditCardNumber = value
      ? this.convertNumberToReadOnly(this.creditCardNumber)
      : this.creditCardNumber;

    this.isreadonly = value;
  }

  cardTypes = cardTypes;
  cardType = this.cardTypes.NO_TYPE;

  constructor() {}

  ngOnInit(): void {}

  private convertNumberToReadOnly(num: string): string {
    return `XXX-XXXX-XXXX-${num.slice(11, 14)}`;
  }
}
