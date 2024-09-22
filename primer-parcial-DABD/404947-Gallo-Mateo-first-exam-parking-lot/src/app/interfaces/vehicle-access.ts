import { VehiculeType } from "../services/data/mock-parking.data";

export interface VehicleAccess {
    newDomain?: boolean;
    model: string;
    domain: string;
    access?: string | Date;
    brand: string;
    typeVehicle?: VehiculeType;
    spaceNeeded: number
}
