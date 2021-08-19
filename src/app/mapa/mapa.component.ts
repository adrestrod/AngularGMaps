import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {
  latitud: number;
  longitud: number;
  estaciones: any[];

  constructor( private apiService: ApiService) {
    this.latitud = 40;
    this.longitud =-3;
    this.estaciones=[];

   }

  ngOnInit(): void {
    navigator.geolocation.getCurrentPosition((position)=>{
      console.log(position);
      this.latitud=position.coords.latitude;
      this.longitud=position.coords.longitude;
    });

    //llamada a la api
    this.apiService.getBicis()
    .then((response)=>{
      this.estaciones = response.data
    })

  }
  onMapClick($event: any) {
    console.log($event);
  }
}


