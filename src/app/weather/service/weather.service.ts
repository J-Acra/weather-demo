import { Injectable } from '@angular/core';
import { WeatherData } from '../interfaces/weather-data';
import { DayOfWeek, TempScale, WeatherItem, WindScale } from '../interfaces/weather-item';
import * as WeatherUtils from './weather-utils';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  constructor() { }

  //importing weather ulitity helper functions
  public convertKelvinToFahrenheit = WeatherUtils.convertKelvinToFahrenheit;
  public convertKelvinToCelsius = WeatherUtils.convertKelvinToCelsius;
  public convertFahrenheitToKelvin = WeatherUtils.convertFahrenheitToKelvin;
  public convertFahrenheitToCelsius = WeatherUtils.convertFahrenheitToCelsius;
  public convertCelsiusToKelvin = WeatherUtils.convertCelsiusToKelvin;
  public convertCelsiusToFahrenheit = WeatherUtils.convertCelsiusToFahrenheit;
  public convertMphToKph = WeatherUtils.convertMphToKph;
  public convertKphToMph = WeatherUtils.convertKphToMph;
  public convertKnotsToMph = WeatherUtils.convertKnotsToMph;
  public convertMphToKnots = WeatherUtils.convertMphToKnots;
  public convertKphToKnots = WeatherUtils.convertKphToKnots;
  public convertKnotsToKph = WeatherUtils.convertKnotsToKph;

  //mocking data locally for demonstration purposes
  public mockData: WeatherData = {
    weather: [
      {
        day: DayOfWeek.friday,
        tempScale: TempScale.fahrenheit,
        temp: 70,
        windScale: WindScale.mph,
        windSpeed: 12
      },
      {
        day: DayOfWeek.saturday,
        tempScale: TempScale.celsius,
        temp: 3.1111,
        windScale: WindScale.kph,
        windSpeed: 19.3121
      },

      {
        day: DayOfWeek.sunday,
        tempScale: TempScale.kelvin,
        temp: 299.817,
        windScale: WindScale.knots,
        windSpeed: 13.0346
      },
    ],
  };
  
  //just showing that you can access all the information you want now from the front-end easily
  public GetWeekForeCast(): WeatherData {
    return this.mockData;
  }

  convertAllTemp(weatherList: WeatherItem[], convertTo: TempScale): WeatherItem[] {
    return weatherList.map((weather) => {
      console.log(weather)
      let currentScale = weather.tempScale;

      if (convertTo === TempScale.fahrenheit) {
        if (currentScale === TempScale.kelvin) {
          weather.temp = this.convertKelvinToFahrenheit(weather.temp);
        } else if (currentScale === TempScale.celsius) {
          weather.temp = this.convertCelsiusToFahrenheit(weather.temp);
        }
      } else if (convertTo === TempScale.celsius) {
        if (currentScale === TempScale.kelvin) {
          weather.temp = this.convertKelvinToCelsius(weather.temp);
        } else if (currentScale === TempScale.fahrenheit) {
          weather.temp = this.convertFahrenheitToCelsius(weather.temp);
        }
      } else if (convertTo === TempScale.kelvin) {
        if (currentScale === TempScale.celsius) {
          weather.temp = this.convertCelsiusToKelvin(weather.temp);
        } else if (currentScale === TempScale.fahrenheit) {
          weather.temp = this.convertFahrenheitToKelvin(weather.temp);
        }
      }
      weather.tempScale = convertTo;
      console.log(weather)
      return weather;
    });
  }
  
  public convertAllSpeed(weatherList: WeatherItem[], convertTo: WindScale): WeatherItem[] {
    return weatherList.map((weather) => {
      let currentScale = weather.windScale;
  
      if (convertTo === WindScale.mph) {
        if (currentScale === WindScale.kph) {
          weather.windSpeed = this.convertKphToMph(weather.windSpeed);
        } else if (currentScale === WindScale.knots) {
          weather.windSpeed = this.convertKnotsToMph(weather.windSpeed);
        }
      } else if (convertTo === WindScale.kph) {
        if (currentScale === WindScale.mph) {
          weather.windSpeed = this.convertMphToKph(weather.windSpeed);
        } else if (currentScale === WindScale.knots) {
          weather.windSpeed = this.convertKnotsToKph(weather.windSpeed);
        }
      } else if (convertTo === WindScale.knots) {
        if (currentScale === WindScale.mph) {
          weather.windSpeed = this.convertMphToKnots(weather.windSpeed);
        } else if (currentScale === WindScale.kph) {
          weather.windSpeed = this.convertKphToKnots(weather.windSpeed);
        }
      }
      weather.windScale = convertTo;
      return weather;
    });
  }

  //This will take a WeatherDataList object, and DayOfWeek as argument, and return a match if found
  public GetSingleDayForecast(robotData: WeatherData, dayOfWeek: DayOfWeek): WeatherItem {
    const matchingWeatherItem = robotData.weather.find((weather) => weather.day === dayOfWeek);
    if (matchingWeatherItem) {
      return matchingWeatherItem;
    } else {
      throw ("No Prediction Found");
    }
  }
}
