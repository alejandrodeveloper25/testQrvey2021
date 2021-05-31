import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CountryServicesService {

  constructor(private http: HttpClient) { }


  getAllCountries():Observable<any>{
    let url = environment.apiUrl;

    return this.http.get(url);
  }
  
}
