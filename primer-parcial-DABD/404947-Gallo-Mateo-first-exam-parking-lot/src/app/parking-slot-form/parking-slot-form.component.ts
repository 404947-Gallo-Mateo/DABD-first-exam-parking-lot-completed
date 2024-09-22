import { Component, EventEmitter, inject, Output } from '@angular/core';
import { MiscellaneousService } from '../services/data/miscellaneous.service';
import { VehicleAccess } from '../interfaces/vehicle-access';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-parking-slot-form',
  standalone: true,
  imports: [CommonModule, FormsModule, DatePipe],
  templateUrl: './parking-slot-form.component.html',
  styleUrl: './parking-slot-form.component.css',
  providers: [DatePipe]
})
export class ParkingSlotRequestComponent {

  private service = inject(MiscellaneousService);

  brands = this.service.getBrands();

  vehicleTypes = this.service.getVehicleTypes(); 

  vehicleAccess: VehicleAccess = {
    newDomain: false,
    model: "",
    domain: "",
    access: new Date(),
    brand: "",
    typeVehicle: undefined,
    spaceNeeded: 0
  }

  @Output() onReturn = new EventEmitter<void>;
  return(){
    this.onReturn.emit()
  }

  //lo de abajo es para el formato del input Ingreso
  constructor(private datePipe: DatePipe) {}
  // formatea la fecha antes de guardarla
  onDateChange(event: any) {
    const date = new Date(event.target.value);
    this.vehicleAccess.access = this.datePipe.transform(date, 'HH:mm dd/MM/yy') || '';
  }

  registerNewAccess(form: NgForm) {
    if(this.vehicleAccess.typeVehicle?.toString() == this.vehicleTypes[0]){
      this.vehicleAccess.spaceNeeded = 1;
    } 
    else if(this.vehicleAccess.typeVehicle?.toString() == this.vehicleTypes[1]){
      this.vehicleAccess.spaceNeeded = 4;
    } 
    else if(this.vehicleAccess.typeVehicle?.toString() == this.vehicleTypes[2]){
      this.vehicleAccess.spaceNeeded = 8;
    }

    console.log(this.vehicleAccess);

    this.service.modifyParkingLot(this.vehicleAccess);

    form.reset();
    this.return();
  }
}

