import { Component } from '@angular/core';
import {HousingLocationInfo} from '../housinglocation';
import {HousingLocation} from '../housing-location/housing-location';


@Component({
  selector: 'app-home',
  imports: [HousingLocation],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

  readonly baseUrl = 'assets';

  housingLocation: HousingLocationInfo = {
    id: 9999,
    name: 'Test Home',
    city: 'Test city',
    state: 'ST',
    photo: `${this.baseUrl}/example-house.jpg`,
    availableUnits: 99,
    wifi: true,
    laundry: false,
  };
}


