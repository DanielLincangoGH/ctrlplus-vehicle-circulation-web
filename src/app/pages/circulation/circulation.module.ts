import { MaterialModule } from './../../material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CirculationRoutingModule } from './circulation-routing.module';
import { RestrictionComponent } from './component/restriction/restriction.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [RestrictionComponent],
  imports: [
    CommonModule,
    CirculationRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
})
export class CirculationModule {}
