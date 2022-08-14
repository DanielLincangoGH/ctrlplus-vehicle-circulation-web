import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestrictionComponent } from './restriction/restriction.component';

const routes: Routes = [
  { path: '', redirectTo: 'restriction', pathMatch: 'full' },
  { path: 'restriction', component: RestrictionComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CirculationRoutingModule {}
