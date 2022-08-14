export interface Vehicle {
  plateId: string;
  color: string;
  model: string;
  brand: string;
  engine: string;
  chassis: string;
  manufacturingYear: number;
}

export class Convert {
  public static toVehicle(json: string): Vehicle {
    return JSON.parse(json);
  }

  public static vehicleToJson(value: Vehicle): string {
    return JSON.stringify(value);
  }
}
