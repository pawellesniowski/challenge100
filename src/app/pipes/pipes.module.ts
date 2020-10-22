import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PipesComponent } from './pipes.component';
import { CoreModule } from '../core/core.module';
import { TruncatePipe } from './truncate/truncate.pipe';

@NgModule({
  declarations: [PipesComponent, TruncatePipe],
  imports: [
    CommonModule,
    CoreModule,
    RouterModule.forChild([
      { path: '', component: PipesComponent },
    ]),
  ],
})
export class PipesModule {}
