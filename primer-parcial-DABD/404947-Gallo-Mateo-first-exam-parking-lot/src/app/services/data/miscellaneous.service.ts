import { Injectable } from '@angular/core';
import { PARKING_LOT_COPY, VehiculeType } from './mock-parking.data';
import { VehicleAccess } from '../../interfaces/vehicle-access';


@Injectable({
  providedIn: 'root'
})
export class MiscellaneousService {
  private readonly BRANDS = [
    {
      id: 1,
      name: 'BMW'
    },
    {
      id: 2,
      name: 'Chevrolet'
    },
    {
      id: 3,
      name: 'Fiat'
    },
    {
      id: 4,
      name: 'Ford'
    },
    {
      id: 5,
      name: 'Mercedes Benz'
    },
    {
      id: 6,
      name: 'Nissan'
    },
    {
      id: 7,
      name: 'Renault'
    }
  ];

  constructor() { }

  getBrands() {
    return this.BRANDS;
  }

  vehicleTypes = Object.keys(VehiculeType).filter(key => isNaN(Number(key))); 
  getVehicleTypes(){
    return this.vehicleTypes;
  }

  parkingLots: any[] = PARKING_LOT_COPY;

  getParkingLots(){
    return this.parkingLots;
  }

  modifyParkingLot(vehicleAccess: VehicleAccess){

    console.log(this.parkingLots);

    //indica si el vehiculo ya encontro lugar
    let parked: boolean = false;

    this.parkingLots.forEach(slot => {
      if(slot.availablePlaces >= vehicleAccess.spaceNeeded && !parked){

        parked = true;

        //reduce los espacios disponibles
        slot.availablePlaces -= vehicleAccess.spaceNeeded;
 
          //asigna el tipo de vehiculo al slot
          switch (vehicleAccess.spaceNeeded) {
            case 1:
                console.log("1 = MOTO");
                slot.vehicules.push(VehiculeType.MOTORCYCLE);
                break;
            case 4:
                console.log("4 = CAR");
                slot.vehicules.push(VehiculeType.CAR);
                break;
            case 8:
                console.log("8 = TRUCK)");
                slot.vehicules.push(VehiculeType.TRUCK);
                break;
        }

        return;
      }

      console.log(this.parkingLots);
    });
  }

}
