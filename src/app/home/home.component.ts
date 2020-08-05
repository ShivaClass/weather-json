import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';
import { WeatherService } from '../weather.service';
//import {Http,Response} from '@angular/http';
//import { WeatherService } from './weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'Weather-Report';
  cityData : any;
  myGroup:FormGroup;
  arrCities = {};
  forecasts : any;

  values=['Delhi','Mumbai','Chennai','Bengaluru','Hyderabad','London',
            'New York','Chicago','Sydney','Wellington','Nagasaki','Kolkata'];


  constructor(private weatherservice:WeatherService ){}

  selectedCity:string;
  nvalue:boolean;

  // convertTodate(dt){
  //   return this toDateString(dt);
  // }
  

  selectChangeHandler (event: any) {
    //update the ui
    this.selectedCity = event.target.value;
    //this.weatherservice.getCityData(this.selectedCity).subscribe(data =>this.cityData = data);
    this.weatherservice.getForecastCity(this.selectedCity).subscribe(data =>{this.forecasts = data;
      console.log(this.forecasts);
    });
   // console.log(this.cityData);
    
    }
  

  

  
  

  ngOnInit() {
    this.myGroup = new FormGroup({
      city:new FormControl('')
      
  });
  // this.arrCities=this.weatherservice.getCityData('Mumbai');
  // console.log(this.arrCities);
}}



