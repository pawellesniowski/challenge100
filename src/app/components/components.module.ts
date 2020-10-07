import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [ToolbarComponent, CardComponent],
  imports: [CommonModule],
  exports: [ToolbarComponent, CardComponent],
})
export class ComponentsModule {}
