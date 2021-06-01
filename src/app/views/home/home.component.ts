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

  activeModal = false;
  selectCountry :any;

  closeM(){
    this.activeModal = false;
  }

  getPopulationString(populationNumber: number){
    var population = Math.round(populationNumber / 1000000);

    if(population > 0){
      return population +" M";
    }else{
      population = Math.round(populationNumber / 1000)
      if(population >0){
        return population +" m";
      }else{
        return populationNumber;
      }
    }
  }

  getBorderCountries(arrayCodeCountries :any[]){
    
    var nameCountries = "";

    for (let i = 0; i < arrayCodeCountries.length; i++) {
      for (let j = 0; j < this.listAllCountries.length; j++) {
        if( arrayCodeCountries[i] == this.listAllCountries[j]['alpha3Code']){
          if(i < arrayCodeCountries.length-1){
            nameCountries += this.listAllCountries[j]['name']+", ";   
          }else{
            nameCountries += this.listAllCountries[j]['name']+"."; 
          }
        }
      }
    }
    return nameCountries;
  }

  selectedCountry(data:any){
    this.activeModal = true;
    this.selectCountry = data;

    if(this.selectCountry.fav == undefined || this.selectCountry.fav == null || this.selectCountry.fav ==""){
      this.selectCountry.fav = false;
    }

    this.selectCountry.population = this.getPopulationString(this.selectCountry.population);

    this.selectCountry.borders = this.getBorderCountries(this.selectCountry.borders);
    console.log(this.selectCountry);
  }

  selectFavoriteCountry(e:any){
    this.selectCountry.fav = e.action;
  }

}
