import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  constructor(private _http:HttpClient) { }

  public listNoticias(categoria:string):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'X-RapidAPI-Host':  'livescore6.p.rapidapi.com', 
        'X-RapidAPI-Key': '1f52a806bbmsh2faef54fc83bb26p1fcf78jsn5ecf86253007'
      })
    };
    return this._http.get('https://livescore6.p.rapidapi.com/news/list?category='+categoria, httpOptions);
  }
}
