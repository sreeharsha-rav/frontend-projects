import { Component, Input } from '@angular/core';
import { HousingLocation } from '../../../models/housinglocation';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-housinglocation',
  standalone: true,
  imports: [RouterLink],
  template: `
    <a class="flex flex-col group bg-white border shadow-sm rounded-xl overflow-hidden hover:shadow-lg focus:outline-none focus:shadow-lg transition flex-grow" href="">
      <div class="relative pt-[80%] rounded-t-xl overflow-hidden">
        <img 
          class="size-full absolute top-0 start-0 object-cover group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out rounded-t-xl" 
          [src]="housingLocation.photo"
          alt="Exterior photo of {{ housingLocation.name }}"
          crossorigin>
      </div>
      <div class="p-4 md:p-5">
        <h3 class="text-lg font-bold text-gray-800">
        {{ housingLocation.name }}
        </h3>
        <p class="mt-1 text-gray-500">
        {{ housingLocation.city }}, {{ housingLocation.state }}
        </p>
        <a class="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent text-blue-600 decoration-2 hover:text-blue-700 hover:underline focus:underline focus:outline-none focus:text-blue-700 disabled:opacity-50 disabled:pointer-events-none" [routerLink]="['/details', housingLocation.id]">
          Learn more
          <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="m9 18 6-6-6-6"></path>
          </svg>
        </a>
      </div>
    </a>
  `,
  styles: [`
    :host {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
    }
  `]
})
export class HousinglocationComponent {
  @Input() housingLocation!: HousingLocation;
}
