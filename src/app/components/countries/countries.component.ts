import { Component, OnInit } from '@angular/core';
import {CountriesService} from "../../services/countries.service";
import {HttpErrorResponse} from "@angular/common/http";
@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {
  private data:any;
  constructor(private _service:CountriesService) { }

  ngOnInit() {

    this._service.getCountries().subscribe(response=>{
      this.data = response;
    },
    (error:HttpErrorResponse)=>{
      if(error.error instanceof Error){
        console.error("Client Side Error");
      }else{
        console.error("Server Side Error"); 
      }
    }
    );

  }

}
