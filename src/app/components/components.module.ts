import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionComponent } from './accordion/accordion.component';
import { AccordionItemComponent } from './accordion/accordion-item/accordion-item.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { CountClicksDirective } from '../core/top-of/top-of.component';
import { ComponentsComponent } from './components.component';
import { RouterModule } from '@angular/router';
import { CoreModule } from '../core/core.module';
import { CreditCartInputComponent } from './credit-cart-input/credit-cart-input.component';
import {FormsModule} from '@angular/forms';
import { SpinnerComponent } from './spinner/spinner.component';

@NgModule({
  declarations: [
    AccordionComponent,
    AccordionItemComponent,
    ProgressBarComponent,
    StarRatingComponent,
    CountClicksDirective,
    ComponentsComponent,
    CreditCartInputComponent,
    SpinnerComponent,
  ],
  imports: [
    CommonModule,
    CoreModule,
    RouterModule.forChild([
      { path: '', component: ComponentsComponent },
    ]),
    FormsModule,
  ],
  exports: [],
})
export class ComponentsModule {}
