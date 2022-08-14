import { VehicleResponse } from './../../interfaces/vehicle.response';
import { VehicleService } from './../../services/vehicle.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Vehicle } from '../../interfaces/vehicle';
import { tap } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private vehicleSrv: VehicleService,
    private snackBar: MatSnackBar
  ) {}

  registrationForm: FormGroup = this.fb.group({
    plateId: ['', Validators.required],
    color: ['', Validators.required],
    model: ['', Validators.required],
    brand: ['', Validators.required],
    engine: ['', Validators.required],
    chassis: ['', Validators.required],
    manufacturingYear: [2022, Validators.required],
  });

  ngOnInit(): void {}

  onRegister() {
    let vehicle: Vehicle = { ...this.registrationForm.value };
    this.vehicleSrv
      .register(vehicle)
      .pipe(
        tap(({ message }: VehicleResponse) =>
          this.snackBar.open(message.message, 'Aceptar', {
            duration: 2000,
            panelClass: ['mat-toolbar', 'mat-primary'],
          })
        )
      )
      .subscribe();
  }
}
