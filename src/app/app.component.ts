import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular_basics';


  employees = [
    { name: "John Doe", country: "India" },
    { name: "Jane Smith", country: "USA" },
    { name: "Alice Johnson", country: "Canada" },
    { name: "Bob Wang", country: "China" },
    { name: "Mohammed Ali", country: "Saudi Arabia" },
    { name: "Sophie Dubois", country: "France" },
    { name: "Diego Hernandez", country: "Mexico" }
  ];

  getcolor(country: any) {
    switch (country) {
      case 'India':
        return 'violet';
      case 'USA':
        return 'indigo';
      case 'Canada':
        return 'blue';
        case 'China':
        return 'green';
      case 'Saudi Arabia':
        return 'yellow';
      case 'France':
        return 'orange';
      case 'Mexico':
        return 'red';
      
    }   
    return null
  }




}









