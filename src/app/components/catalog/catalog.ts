import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Car {
  id: string;
  model: string;
  year: number;
  price: number;
  location: string;
  imageUrl: string;
}

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './catalog.html',
  styleUrl: './catalog.scss'
})
export class Catalog {
  cars: Car[] = [
    {
      id: '1',
      model: '2024 Tesla Model S',
      year: 2024,
      price: 80000,
      location: 'San Francisco, CA',
      imageUrl: 'assets/cars/tesla.jpg'
    },
    {
      id: '2',
      model: '2023 BMW 3 Series',
      year: 2023,
      price: 50000,
      location: 'New York, NY',
      imageUrl: 'assets/cars/bmw.jpg'
    },
    {
      id: '3',
      model: '2022 Audi A4',
      year: 2022,
      price: 45000,
      location: 'Los Angeles, CA',
      imageUrl: 'assets/cars/audi.jpg'
    }
  ];
}
