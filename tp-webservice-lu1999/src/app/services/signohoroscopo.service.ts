import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignohoroscopoService {

  constructor(private _http:HttpClient) { }

  public getHoroscopoPorSigno(signo:string):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'X-RapidAPI-Host':  'horoscope5.p.rapidapi.com', 
        'X-RapidAPI-Key': '1f52a806bbmsh2faef54fc83bb26p1fcf78jsn5ecf86253007'
      })
    };
    return this._http.get('https://horoscope5.p.rapidapi.com/general/daily?sign='+signo, httpOptions);
  }
}