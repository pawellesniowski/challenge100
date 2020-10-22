import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditCardFormatter',
})
export class CreditCardFormatterPipe
  implements PipeTransform {
  private validationMessages = {
    INVALID_LENGTH: 'Invalid Card Length',
    INVALID_FORMAT: 'Invalid Number Format',
  };

  transform(value: string): string {
    if (!this.hasValidLength(value)) {
      return this.validationMessages.INVALID_LENGTH;
    }

    if (!this.isOnlyNumbers(value)) {
      return this.validationMessages.INVALID_FORMAT;
    }
    return this.formatCardNumber(value);
  }

  private hasValidLength(cardNumber: string): boolean {
    return cardNumber.length === 14;
  }

  private isOnlyNumbers(cardNumber: string): boolean {
    return /^\d+$/.test(cardNumber);
  }

  private formatCardNumber(cardNumber: string): string {
    return cardNumber;
  }
}
