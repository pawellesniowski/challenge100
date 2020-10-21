import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./components/components.module').then(
        (m) => m.ComponentsModule
      ),
  },
  {
    path: 'directives',
    loadChildren: () =>
      import('./directives/directives.module').then(
        (m) => m.DirectivesModule
      ),
  },
  {
    path: 'services',
    loadChildren: () =>
      import('./services/services.module').then(
        (m) => m.ServicesModule
      ),
  },
  {
    path: 'pipes',
    loadChildren: () =>
      import('./pipes/pipes.module').then(
        (m) => m.PipesModule
      ),
  },
  {
    path: 'other',
    loadChildren: () =>
      import('./other/other.module').then((m) => {
        console.log('bla bla');
        return m.OtherModule;
      }),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
