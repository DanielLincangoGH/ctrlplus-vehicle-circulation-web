import { PrimengModule } from './../../primeng.module';
import { VehicleModule } from './../vehicle/vehicle.module';
import { MaterialModule } from './../../material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CirculationRoutingModule } from './circulation-routing.module';
import { RestrictionComponent } from './component/restriction/restriction.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RestrictionDetailComponent } from './component/restriction-detail/restriction-detail.component';

@NgModule({
  declarations: [RestrictionComponent, RestrictionDetailComponent],
  imports: [
    CommonModule,
    CirculationRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    VehicleModule,
    PrimengModule,
  ],
})
export class CirculationModule {}
