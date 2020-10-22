import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { TopOfComponent } from './top-of/top-of.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    ToolbarComponent,
    TopOfComponent,
    CardComponent,
  ],
  imports: [CommonModule],
  exports: [
    ToolbarComponent,
    TopOfComponent,
    CardComponent,
  ],
})
export class CoreModule {}
