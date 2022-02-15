import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarjeta-credito',
  templateUrl: './tarjeta-credito.component.html',
  styleUrls: ['./tarjeta-credito.component.css']
})
export class TarjetaCreditoComponent implements OnInit {
  listTarjetas: any[] = [
    { titulo: 'Ismar Morales', numeroTarjeta: '789456123321', fechaExpiracion: '05/07', cvv: '123'},
    { titulo: 'Carlos Sanchez', numeroTarjeta: '123456765432', fechaExpiracion: '05/12', cvv: '123'},
    { titulo: 'Juan Lopez', numeroTarjeta: '43234566634', fechaExpiracion: '01/07', cvv: '435'},
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
