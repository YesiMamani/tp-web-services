import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InfocovidService {

  constructor(private _http: HttpClient) { }

  public getInfoCovid():Observable<any>{
    
    const httpOptions = {
      headers: new HttpHeaders({
        'X-RapidAPI-Host':  'covid-19-tracking.p.rapidapi.com', 
        'x-rapidapi-key': '1f52a806bbmsh2faef54fc83bb26p1fcf78jsn5ecf86253007'
      })
    };
   return this._http.get('https://covid-19-tracking.p.rapidapi.com/v1',httpOptions);
  }

}
