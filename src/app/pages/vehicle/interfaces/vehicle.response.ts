import { Message } from './../../../shared/interfaces/message';
import { Vehicle } from './vehicle';

export interface VehicleResponse {
  vehicle: Vehicle;
  message: Message;
}
