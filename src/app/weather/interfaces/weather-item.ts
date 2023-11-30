export interface WeatherItem {
    day: DayOfWeek;
    tempScale: TempScale
    temp: number;
    windScale: WindScale
    windSpeed: number;
}
export enum DayOfWeek {
    monday = "monday",
    tuesday = "tuesday",
    wednesday = "wedneday",
    thursday = "thursday",
    friday = "friday",
    saturday = "saturday",
    sunday = "sunday",
}

export enum TempScale {
    fahrenheit = "F",
    celsius = "C",
    kelvin = "K",
}

export enum WindScale {
    mph = "mph",
    kph = "kph",
    knots = "kt"
}