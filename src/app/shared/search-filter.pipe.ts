import { Pipe, PipeTransform } from '@angular/core';
import { jobProfileData } from './models/upadapt.models';

@Pipe({
  name: 'searchFilter',
  standalone: true
})
export class SearchFilterPipe implements PipeTransform {

  transform(jobList: jobProfileData[], searchText: string): jobProfileData[] {
    if(!jobList){
      return [];
    }
    if(!searchText){
      return jobList;
    }

    searchText = searchText.toLocaleLowerCase();

    return jobList.filter(item => item.job_profile.includes(searchText));
  }
}
