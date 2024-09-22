import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ParkingViewComponent } from './parking-view/parking-view.component';
import { ParkingSlotRequestComponent } from './parking-slot-form/parking-slot-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ParkingViewComponent, ParkingSlotRequestComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '404947-Gallo-Mateo-first-exam-parking-lot';

  showSlots: boolean = true;
  showForm: boolean = false;

  alterView(){
    this.showSlots = !this.showSlots;
    this.showForm = !this.showForm;
  }
}
