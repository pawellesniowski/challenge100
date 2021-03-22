import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OtherComponent } from './other.component';
import { RouterModule } from '@angular/router';
import { ChangeDetectionComponent } from './change-detection/change-detection.component';

@NgModule({
  declarations: [OtherComponent, ChangeDetectionComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: OtherComponent },
    ]),
  ],
})
export class OtherModule {}
