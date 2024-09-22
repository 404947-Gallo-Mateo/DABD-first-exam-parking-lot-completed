import { VehiculeType } from "../services/data/mock-parking.data";

export interface ParkingSlot {
    vehicules: VehiculeType[];
    availablePlaces: number;
    totalPlaces: number;
}

