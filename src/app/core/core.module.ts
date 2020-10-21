import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { TopOfComponent } from './top-of/top-of.component';

@NgModule({
  declarations: [ToolbarComponent, TopOfComponent],
  imports: [CommonModule],
  exports: [ToolbarComponent, TopOfComponent],
})
export class CoreModule {}
