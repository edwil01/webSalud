import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.css']
})
export class CarruselComponent implements OnInit {
  mensaje= 'La salud es importante, cuidala!!:';
  fecha= new Date();

  constructor() { }

  ngOnInit() {
  }

}
