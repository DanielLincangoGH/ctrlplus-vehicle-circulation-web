import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CirculationRoutingModule } from './circulation-routing.module';
import { RestrictionComponent } from './restriction/restriction.component';


@NgModule({
  declarations: [
    RestrictionComponent
  ],
  imports: [
    CommonModule,
    CirculationRoutingModule
  ]
})
export class CirculationModule { }