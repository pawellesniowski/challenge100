import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { AccordionComponent } from './accordion/accordion.component';
import { AccordionItemComponent } from './accordion/accordion-item/accordion-item.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { CountClicksDirective } from '../core/top-of/top-of.component';
import { ComponentsComponent } from './components.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    CardComponent,
    AccordionComponent,
    AccordionItemComponent,
    ProgressBarComponent,
    StarRatingComponent,
    CountClicksDirective,
    ComponentsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: ComponentsComponent },
    ]),
  ],
  exports: [],
})
export class ComponentsModule {}
