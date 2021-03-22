import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PipesComponent } from './pipes.component';
import { CoreModule } from '../core/core.module';
import { TruncatePipe } from './truncate/truncate.pipe';
import { CreditCardFormatterPipe } from './credit-card-formatter/credit-card-formatter.pipe';
import { FlattenArrPipe } from './flatten-arr.pipe';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    PipesComponent,
    TruncatePipe,
    CreditCardFormatterPipe,
    FlattenArrPipe,
    FilterPipe,
  ],
  imports: [
    CommonModule,
    CoreModule,
    RouterModule.forChild([
      { path: '', component: PipesComponent },
    ]),
  ],
  providers: [FlattenArrPipe]
})
export class PipesModule {}
