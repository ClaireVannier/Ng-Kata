import { Component } from '@angular/core';

@Component({
  selector: 'app-convertissor',
  standalone: true,
  imports: [],
  templateUrl: './convertissor.component.html',
  styleUrl: './convertissor.component.scss',
})

export class ConvertissorComponent {


  convertTemperature(value: number, fromUnity: string, toUnity: string): number {
    let result: number;
    const fromUnit = fromUnity.toLowerCase()
    const toUnit = toUnity.toLowerCase()

    switch (fromUnit) {
      case 'celsius':
        switch (toUnit) {
          case 'fahrenheit':
            result = (value * 9) / 5 + 32;
            break;
          case 'kelvin':
            result = value + 273.15;
            break;
          default:
            result = value;
            break;
        }
        break;
      case 'fahrenheit':
        switch (toUnit) {
          case 'celsius':
            result = ((value - 32) * 5) / 9;
            break;
          case 'kelvin':
            result = ((value + 459.67) * 5) / 9;
            break;
          default:
            result = value;
            break;
        }
        break;
      case 'kelvin':
        switch (toUnit) {
          case 'celsius':
            result = value - 273.15;
            break;
          case 'fahrenheit':
            result = (value * 9) / 5 - 459.67;
            break;
          default:
            result = value;
            break;
        }
        break;
      default:
        result = value;
        break;
    }
    return +result.toFixed(2);
    
  }
}