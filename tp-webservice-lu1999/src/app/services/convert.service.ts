import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConvertService {

  constructor(private _http: HttpClient) { }

  public getConversion(fromType:string,toType:string,fromValue:string):Observable<any>{
    const param='from-type='+fromType+'&to-type='+toType+'&from-value='+fromValue;
    const httpOptions = {
      headers: new HttpHeaders({
        'X-RapidAPI-Host':  'community-neutrino-currency-conversion.p.rapidapi.com', 
        'x-rapidapi-key':  '1f52a806bbmsh2faef54fc83bb26p1fcf78jsn5ecf86253007',
        'content-type': 'application/x-www-form-urlencoded'
      })
    };
   return this._http.post('https://community-neutrino-currency-conversion.p.rapidapi.com/convert',param,httpOptions);
  }
}
