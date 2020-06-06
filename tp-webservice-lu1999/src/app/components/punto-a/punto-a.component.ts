import { Component, OnInit } from '@angular/core';
import { ConvertService } from './../../services/convert.service';
import { Converted } from './../../models/converted';

@Component({
  selector: 'app-punto-a',
  templateUrl: './punto-a.component.html',
  styleUrls: ['./punto-a.component.css']
})
export class PuntoAComponent implements OnInit {
  converted:Converted;
  fromType:string="USD";
  toType:string="ARS";
  fromValue:string="";

  constructor(private convertservice:ConvertService) {
    this.converted=new Converted();
    this.converted.result="0";
   }

  ngOnInit(): void {
  }

  convertirMoneda(){
    this.convertservice.getConversion(this.fromType, this.toType, this.fromValue).subscribe(
      (result) => {
        this.converted=result;
        console.log(this.converted);
    },
    error => {alert("Error en la peticion");this.converted.result="0";}
    
    );
  }
}
