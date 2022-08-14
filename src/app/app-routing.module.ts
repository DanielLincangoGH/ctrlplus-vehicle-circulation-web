import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'vehicle', pathMatch: 'full' },
  {
    path: 'vehicle',
    loadChildren: () =>
      import('./pages/vehicle/vehicle.module').then((m) => m.VehicleModule),
  },
  {
    path: 'circulation',
    loadChildren: () =>
      import('./pages/circulation/circulation.module').then(
        (m) => m.CirculationModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
