import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'  
})
export class CountriesService {

  constructor(private _http:Http) { }
  
  public getCountries():any{
    return this._http.get("https://restcountries.eu/rest/v2/all").pipe(map((response: Response)=>{
      console.log(response.json());
      return response.json();
    },
error =>{
  this.handleError(error);
  }
));

}

  public handleError(error){
    console.error("Error is: "+error);
    return Observable.throw(error||"Internal Server Error");
  }

}
