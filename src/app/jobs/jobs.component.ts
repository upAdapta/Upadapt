import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import data from '../shared/data/jobs.json';
import { FilterItemModel } from '../shared/models/upadapt.models';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {

  jobData = data.profiles;
  locations = ["Mumbai", 'Pune', 'Bangalore', 'Chennai', 'Noida', 'Nagpur'];
  locationFilterArr: string[] = [];
  profileFilterArr: string[] = [];
  chipArray: FilterItemModel[] = [];

  filteredJobData!:any[]; 
  
  constructor() { }
  
  ngOnInit(): void {
    this.filteredJobData = data.profiles;
  }

  scrollTo(refId: string){
    const el = document.getElementById(refId)
    el?.scrollIntoView({behavior:'smooth'});
  }

  removeFilter(filterItem: FilterItemModel){
    if(filterItem.type === "location"){
      this.chipArray = this.chipArray.filter((item) => item.name != filterItem.name);
      this.locationFilterArr = this.locationFilterArr.filter(item => item != filterItem.name);
    }
    else{
      this.chipArray = this.chipArray.filter((item) => item.name != filterItem.name);
      this.profileFilterArr = this.profileFilterArr.filter(item => item != filterItem.name);
    }

    this.updateFilterData(filterItem.name);
  }
    

  addFilter(filterItem: string, filterType: string) {
    const checkExistingFilter = (filterParam: string) => this.chipArray.some(({name}) => name == filterParam)
    
    if(!checkExistingFilter(filterItem)) {
      filterType === 'location' ? this.locationFilterArr.push(filterItem): this.profileFilterArr.push(filterItem);
      this.chipArray.push({name: filterItem, type: filterType});
      this.updateFilterData(filterItem);
    }
  }

  updateFilterData(item: string ) {
    if(!(this.locationFilterArr.length || this.profileFilterArr.length)){
      this.filteredJobData = this.jobData;
    }
    else if(this.locationFilterArr.length && this.profileFilterArr.length){
      this.filteredJobData = this.jobData.filter((profile) => {
        return this.locationFilterArr.includes(profile.job_location) && this.profileFilterArr.includes(profile.job_profile)
      })
    }
    else{
      if(this.locationFilterArr.length){
        this.filteredJobData = this.jobData.filter((profile) => {
          return (this.locationFilterArr.includes(profile.job_location));
        })
      }
      else{
        this.filteredJobData = this.jobData.filter((profile) => {
          return (this.profileFilterArr.includes(profile.job_profile));
        })
      }
    }
  }
  
}
