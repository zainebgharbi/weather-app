import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApixuService {

  constructor(private http: HttpClient) {
    
   }
   getWeather(location:any){
    return this.http.get(
        'http://api.weatherapi.com/v1/current.json?key=9d20cf9757344059ac0192654232604&q='+location+'&aqi=no'
    );
}
}
