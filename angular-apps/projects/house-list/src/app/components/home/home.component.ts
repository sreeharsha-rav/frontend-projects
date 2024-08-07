import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../../models/housinglocation';
import { HousinglocationComponent } from "./housinglocation/housinglocation.component";
import { HousingService } from '../../services/housing.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousinglocationComponent],
  templateUrl: './home.component.html',
  styles: ``
})
export class HomeComponent {

  housingLocationList!: HousingLocation[];
  filteredLocationList: HousingLocation[] = [];
  housingService: HousingService = inject(HousingService);
  
  constructor() {
    this.housingService.getAllHousingLocations().then((housingLocationList: HousingLocation[]) => {
      this.housingLocationList = housingLocationList;
      this.filteredLocationList = housingLocationList;
    });
  }

  filterResults(text: string) {
    if (!text) {
      this.filteredLocationList = this.housingLocationList;
      return;
    }
    this.filteredLocationList = this.housingLocationList.filter((housingLocation) =>
      housingLocation?.city.toLowerCase().includes(text.toLowerCase()),
    );
  }
}
