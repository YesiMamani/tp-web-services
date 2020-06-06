import { Component, OnInit } from '@angular/core';
import { InfocovidService } from './../../services/infocovid.service';
import { Infocovid } from './../../models/infocovid';

@Component({
  selector: 'app-punto-d',
  templateUrl: './punto-d.component.html',
  styleUrls: ['./punto-d.component.css']
})
export class PuntoDComponent implements OnInit {
  vector_infoCovid:Array<Infocovid>;

  constructor(private infoCovidService:InfocovidService) { 
    this.vector_infoCovid=new Array<Infocovid>();
  }

  ngOnInit(): void {
  }

  getInfoCovid(){
    this.infoCovidService.getInfoCovid().subscribe(
      (result) => {
        this.vector_infoCovid=new Array<Infocovid>();
        this.vector_infoCovid=result;        
        
        console.log(result[0]);
        console.log(this.vector_infoCovid);
    },
    error => {alert("Error en la peticion");}
    
    );
  }

}
