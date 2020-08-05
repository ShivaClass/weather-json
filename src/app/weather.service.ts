import { Injectable } from '@angular/core';
import {  HttpClient  } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  apiKey = '66906173618b20970f359242295d1175';
  arrCities = {};
  _url:string = "http://api.openweathermap.org/data/2.5/weather?q=";
  url:string= "http://api.openweathermap.org/data/2.5/forecast?q=";

  constructor(private http:HttpClient) {
    //this.http.get(this._url).subscribe(data =>this.arrCities = data);
   }
 
    
  setCityData() {
    //this.arrCities=this.http.get(this._url);
 }

 getCityData(city:string){
   //return this.arrCities[city];
   return this.http.get(this._url+city+'&units=metric'+'&APPID='+this.apiKey);
    
 }
 getForecastCity(city:string){
   return this.http.get(this.url+city+'&units=metric'+'&APPID='+this.apiKey);
 }

}
