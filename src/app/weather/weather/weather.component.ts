import { Component, OnInit } from '@angular/core';
import { WeatherData } from '../interfaces/weather-data';
import { DayOfWeek, TempScale, WeatherItem, WindScale } from '../interfaces/weather-item';
import { WeatherService } from '../service/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent implements OnInit {
  
  weatherData: WeatherData;
  weatherList!: WeatherItem[];
  sunnyImg:string='../../../assets/sunny.jpg';
  coldImg:string='../../../assets/cold.jpg';

  celsius = TempScale.celsius
  kelvin =TempScale.kelvin
  fahrenheit = TempScale.fahrenheit
  mph = WindScale.mph
  kph= WindScale.kph
  knots = WindScale.knots
  
  constructor(private weatherService: WeatherService) {
    // Create an instance of WeatherService and fetch the weather data
    this.weatherData = this.weatherService.GetWeekForeCast();
  }
  ngOnInit(): void {
    this.weatherList = this.weatherData.weather
  }
   coldWeatherCheck(temp:number, tempScale:TempScale) {
    let temperatureInCelsius;
    // Convert temperature to Celsius for uniform comparison
    if (tempScale === TempScale.fahrenheit) {
      temperatureInCelsius = (temp - 32) * (5 / 9);
    } else if (tempScale === TempScale.kelvin) {
      temperatureInCelsius = temp - 273.15;
    } else if (tempScale === TempScale.celsius) {
      temperatureInCelsius = temp;
    } else {
      // Handle unsupported temperature scale
      throw new Error('Unsupported temperature scale');
    }
  
    // Check if the temperature is below 10 degrees Celsius (50 degrees Fahrenheit)
    return temperatureInCelsius < 10;
  }
  getRandomTempScale(){
    let listScale = [
      TempScale.fahrenheit,
      TempScale.celsius,
      TempScale.kelvin
    ]
    console.log()
    return listScale[Math.floor(Math.random()*3)]
  }
  getRandomWindScale(){
    let listScale = [
      WindScale.mph,
      WindScale.kph,
      WindScale.knots
    ]
    return listScale[Math.floor(Math.random()*3)]
  }

  addWeatherItem(){
    let newItem = {
      day: DayOfWeek.friday,
      tempScale: this.getRandomTempScale(),
      temp: Math.random()*(90-1)+1 ,
      windScale: this.getRandomWindScale(),
      windSpeed: Math.random()*(40-1)+1 
    }
    this.weatherList?.push(
      newItem
    )
  }
  convertWeather(tempScale:TempScale){
    let convertedList = this.weatherService.convertAllTemp(this.weatherList,tempScale)
    this.weatherList = convertedList;
  }
  convertSpeed(speedScale:WindScale){
    let convertedList = this.weatherService.convertAllSpeed(this.weatherList,speedScale)
    this.weatherList = convertedList;
  }
}
