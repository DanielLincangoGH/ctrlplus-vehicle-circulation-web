import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vehicle } from '../interfaces/vehicle';
import { VehicleResponse } from './../interfaces/vehicle.response';
import { environment } from './../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class VehicleService {
  constructor(private http: HttpClient) {}

  register(vehicle: Vehicle): Observable<VehicleResponse> {
    return this.http.post<VehicleResponse>(
      `${environment.apiUrl}/vehicle/api/v1`,
      vehicle
    );
  }
}
