import { VehicleDetailComponent } from './components/vehicle-detail/vehicle-detail.component';
import { MaterialModule } from './../../material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VehicleRoutingModule } from './vehicle-routing.module';
import { RegistrationComponent } from './components/registration/registration.component';

@NgModule({
  declarations: [RegistrationComponent, VehicleDetailComponent],
  imports: [
    CommonModule,
    VehicleRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  exports: [VehicleDetailComponent],
})
export class VehicleModule {}
