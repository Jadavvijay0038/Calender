import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  constructor(private http: HttpClient) { }
  catchdata: any = [];
  getcurrentmonthData = (month_name: string) => {
    if (this.catchdata[month_name]) {
      return Promise.resolve(this.catchdata[month_name]);
    } else {
      return this.http.get(`https://v1.igpods.com/api/social_calendar/get/${month_name}`)
        .toPromise()
        .then(response => {
          this.catchdata[month_name] = response;
          return response;
        })
        .catch(error => {
          console.error(`Error while fetching data for ${month_name}:`, error);
          return null;
        });
    }
  }

  GetData = () => {
    return this.http.get('https://v1.igpods.com/api/social_calendar/all_months');
  }

}
