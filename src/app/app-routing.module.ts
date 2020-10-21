import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponentsComponent } from './components/components.component';
import { DirectivesComponent } from './directives/directives.component';
import { OtherComponent } from './other/other.component';
import { PipesComponent } from './pipes/pipes.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [
  { path: '', component: ComponentsComponent },
  { path: 'directives', component: DirectivesComponent },
  { path: 'other', component: OtherComponent },
  { path: 'pipes', component: PipesComponent },
  { path: 'services', component: ServicesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
