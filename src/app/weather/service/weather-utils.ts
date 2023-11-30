export function convertKelvinToFahrenheit(kelvin: number): number {
    return (kelvin - 273.15) * (9 / 5) + 32;
  }
  
  export function convertKelvinToCelsius(kelvin: number): number {
    return kelvin - 273.15;
  }
  
  export function convertFahrenheitToKelvin(fahrenheit: number): number {
    return (fahrenheit - 32) * (5 / 9) + 273.15;
  }
  
  export function convertFahrenheitToCelsius(fahrenheit: number): number {
    return (fahrenheit - 32) * (5 / 9);
  }
  
  export function convertCelsiusToKelvin(celsius: number): number {
    return celsius + 273.15;
  }
  
  export function convertCelsiusToFahrenheit(celsius: number): number {
    return celsius * (9 / 5) + 32;
  }
  
  export function convertMphToKph(mph: number): number {
    return mph * 1.60934;
  }
  
  export function convertKphToMph(kph: number): number {
    return kph / 1.60934;
  }
  
  export function convertKnotsToMph(knots: number): number {
    return knots * 1.15078;
  }
  
  export function convertMphToKnots(mph: number): number {
    return mph / 1.15078;
  }
  
  export function convertKphToKnots(kph: number): number {
    return kph / 1.852;
  }
  
  export function convertKnotsToKph(knots: number): number {
    return knots * 1.852;
  }
  