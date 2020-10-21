import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OtherComponent } from './other.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [OtherComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: OtherComponent },
    ]),
  ],
})
export class OtherModule {}
