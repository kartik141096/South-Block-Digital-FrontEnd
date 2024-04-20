import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private backend_api_url = 'http://127.0.0.1:8000/';
  private weather_api_url = 'http://api.weatherapi.com/v1/current.json?key=497bbe3effae4d6799050929241804&q=dehradun';

  constructor(private http: HttpClient) { }

  get_weather_data()
  {
    return this.http.get<any>(this.backend_api_url+'get-weather');
  }

}