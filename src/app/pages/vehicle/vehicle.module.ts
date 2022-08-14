import { MaterialModule } from './../../material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VehicleRoutingModule } from './vehicle-routing.module';
import { RegistrationComponent } from './components/registration/registration.component';


@NgModule({
  declarations: [
    RegistrationComponent
  ],
  imports: [
    CommonModule,
    VehicleRoutingModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class VehicleModule { }
