import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { CardComponent } from './card/card.component';
import { AccordionComponent } from './accordion/accordion.component';
import { AccordionItemComponent } from './accordion/accordion-item/accordion-item.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { StarRatingComponent } from './star-rating/star-rating.component';
import {
  CountClicksDirective,
  TopOfComponent,
} from './top-of/top-of.component';
import { ComponentsComponent } from './components.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    ToolbarComponent,
    CardComponent,
    AccordionComponent,
    AccordionItemComponent,
    ProgressBarComponent,
    StarRatingComponent,
    TopOfComponent,
    CountClicksDirective,
    ComponentsComponent,
  ],
  imports: [CommonModule, AppRoutingModule],
  exports: [ToolbarComponent, TopOfComponent],
})
export class ComponentsModule {}
