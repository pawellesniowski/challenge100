import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DirectivesComponent } from './directives.component';
import { CoreModule } from '../core/core.module';
import { DebounceDirective } from './debounce.directive';

@NgModule({
  declarations: [DirectivesComponent, DebounceDirective],
  imports: [
    CoreModule,
    CommonModule,
    RouterModule.forChild([
      { path: '', component: DirectivesComponent },
    ]),
  ],
})
export class DirectivesModule {}
