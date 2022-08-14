import { Restriction } from './restriction';
import { Vehicle } from './../../vehicle/interfaces/vehicle';

export interface RestrictionResponse {
  vehicle: Vehicle;
  restriction: Restriction;
}
