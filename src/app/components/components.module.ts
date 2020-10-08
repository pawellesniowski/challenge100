import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { CardComponent } from './card/card.component';
import { AccordionComponent } from './accordion/accordion.component';
import { AccordionItemComponent } from './accordion/accordion-item/accordion-item.component';

@NgModule({
  declarations: [ToolbarComponent, CardComponent, AccordionComponent, AccordionItemComponent],
  imports: [CommonModule],
  exports: [ToolbarComponent, CardComponent, AccordionComponent],
})
export class ComponentsModule {}
