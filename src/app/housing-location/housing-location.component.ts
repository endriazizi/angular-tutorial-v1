import { Component, input } from '@angular/core';
import { HousingLocation } from '../models/housing-location.interface';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-housing-location',
  imports: [RouterModule],
  templateUrl: './housing-location.component.html',
  styleUrl: './housing-location.component.css'
})
export class HousingLocatioComponent {
housingLocation = input.required<HousingLocation>();
}
