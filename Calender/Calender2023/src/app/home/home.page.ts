import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { ApiServiceService } from '../api-service.service';

interface Month {
  _id: string;
  month: string;
  calendar_banner_text: string;
  calendar_banner_style: {
    'background-image': string
  }
}

interface MonthList extends Array<Month> { }

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  @ViewChild('mySlider', { static: true }) slider: IonSlides | undefined;
  constructor(private Apiservice: ApiServiceService) { }
  title = 'Calender 2023';
  monthList: any;
  currentIndex: number = 0;
  currentMonthData: any;

  ngOnInit(): void {
    this.getallmonthname();
  }

  async onSlideChange() {
    if (this.slider) {
      this.currentIndex = await this.slider.getActiveIndex();
      console.log(this.currentIndex);
      this.getCurrentMonthData()
    }
  }
  async ngAfterViewInit() {
    if (this.slider) {
      this.currentIndex = await this.slider.getActiveIndex();
      console.log(this, this.currentIndex);
    }
  }
  async getallmonthname() {
    try {
      const data = await this.Apiservice.GetData().toPromise();
      this.monthList = data;
      this.getCurrentMonthData()
    } catch (error) {
      console.error('Error while fetching all month names:', error);
    }
  }

  async getCurrentMonthData() {
    let allMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    try {
      this.currentMonthData = await this.Apiservice.getcurrentmonthData(allMonths[this.currentIndex]);
    } catch (error) {
      console.error(`Error while fetching data for current month:`, error);
    }
  }
}
