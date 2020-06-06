import { Component, OnInit } from '@angular/core';
import { SignohoroscopoService } from './../../services/signohoroscopo.service';
import { Signohoroscopo } from './../../models/signohoroscopo';

@Component({
  selector: 'app-punto-c',
  templateUrl: './punto-c.component.html',
  styleUrls: ['./punto-c.component.css']
})
export class PuntoCComponent implements OnInit {
  signoHoroscopo:Signohoroscopo;
  description:string="";

  constructor(private signoHoroscopoService:SignohoroscopoService) { 
    this.signoHoroscopo=new Signohoroscopo();
  }

  ngOnInit(): void {
  }

  getHoroscopo(event){
    this.signoHoroscopoService.getHoroscopoPorSigno(event.target.id).subscribe(
      (result) => {
        this.signoHoroscopo=new Signohoroscopo();
        this.signoHoroscopo=result['sign'];        
        this.description=result['result'].description;
        console.log(result['result']);
        console.log(result['result'].description);
        console.log(this.signoHoroscopo);
    },
    error => {alert("Error en la peticion");}
    
    );
  }
  
}