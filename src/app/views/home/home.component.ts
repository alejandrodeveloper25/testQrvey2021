import { Component, OnInit } from '@angular/core';
import { CountryServicesService } from 'src/app/services/country-services.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private countryServices: CountryServicesService) { }

  filterName = "";
  selectFilter = "";

  listAllCountries : any[] =[];

  ListAfricaCountries : any[] = [];
  listAmericaCountries : any[] = [];
  listAsiaCountries : any[] = [];
  listEuropaCountries : any[] = [];
  listOceaniaCountries : any[] = [];

  buildContinentalList(listAllCountries :any[]){

    this.ListAfricaCountries = [];
    this.listAmericaCountries = [];
    this.listAsiaCountries = [];
    this.listEuropaCountries  = [];
    this.listOceaniaCountries = [];

    listAllCountries.forEach(country => {
      if(country.region == 'Africa'){
        this.ListAfricaCountries.push(country);
      }else if(country.region == 'Americas'){
        this.listAmericaCountries.push(country);
      }else if(country.region == 'Asia'){
        this.listAsiaCountries.push(country);
      }else if(country.region == 'Europe'){
        this.listEuropaCountries.push(country);
      }else if(country.region == 'Oceania'){
        this.listOceaniaCountries.push(country);
      }
      
    });
  }

  getAllCountries(){
    this.countryServices.getAllCountries().subscribe(data=>{
      this.listAllCountries = data;
      this.buildContinentalList(this.listAllCountries);
    },error=>{
      console.log(error);
    })
  }
  
  ngOnInit(): void {
    this.getAllCountries();
  }

}
