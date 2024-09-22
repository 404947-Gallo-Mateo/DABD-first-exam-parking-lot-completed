import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { MiscellaneousService } from '../services/data/miscellaneous.service';
import { VehiculeType } from '../services/data/mock-parking.data';
import { ParkingSlot } from '../interfaces/parking-slot';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-parking-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './parking-view.component.html',
  styleUrl: './parking-view.component.css'
})
export class ParkingViewComponent implements OnInit {
  ngOnInit(): void {
    this.parkingLots = this.service.getParkingLots();
    console.log("parkingLots: ", this.parkingLots);
    console.log("vehicleTypesNumber: ", this.vehicleTypesNumber);
    console.log("vehicleTypesString: ", this.vehicleTypesString);
  }

  private service = inject(MiscellaneousService);

  //guardar los valores numéricos (1, 2, 3):
  vehicleTypesNumber = Object.values(VehiculeType).filter(value => !isNaN(Number(value)));

  //guarda los nombres del enum
  vehicleTypesString = Object.keys(VehiculeType).filter(key => isNaN(Number(key)));

  parkingLots: ParkingSlot[] = [];

  @Output() onNew = new EventEmitter<void>;
  newForm(){
    this.onNew.emit()
  }


}