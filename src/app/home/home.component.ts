import { Component, inject} from '@angular/core';

import { HousingLocation } from '../models/housing-location.interface';
import { HousingLocatioComponent } from '../housing-location/housing-location.component';

import { HousingService } from '../services/housing.service';
@Component({
  selector: 'app-home',
  imports: [HousingLocatioComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class Home {
  housingLocationList: HousingLocation[] = [];
  housingService: HousingService = inject(HousingService);

    constructor() {
    this.housingLocationList = this.housingService.getAllHousingLocations();
  }

  readonly baseUrl = 'assets';

  // housingLocationItem: HousingLocation = {
  //   id: 9999,
  //   name: 'Test Home',
  //   city: 'Test city',
  //   state: 'ST',
  //   photo: `${this.baseUrl}/example-house.jpg`,
  //   availableUnits: 99,
  //   wifi: true,
  //   laundry: false,
  // };
}
