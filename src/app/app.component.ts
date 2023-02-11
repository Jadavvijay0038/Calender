import { Component, OnInit } from '@angular/core';
import Swiper from 'swiper';
import { ApiServiceService } from './api-service.service';

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
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
url(arg0: any) {
throw new Error('Method not implemented.');
}
  bannerImageUrl: any;
  constructor(private apiService: ApiServiceService) { }

  title = 'Calender';
  monthList: any;
  currentIndex: number = 0;
  currentMonthData: any;
  mySwiper: any;

  ngOnInit(): void {
    const mySwiper = new Swiper('.swiper-container', {
      direction: 'horizontal',
      initialSlide: 0,
      slidesPerView: 1,
      spaceBetween: 16,  
      loop: false,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      speed: 1000,
    });


    mySwiper.on('slideChange', () => {
      this.currentIndex = mySwiper.activeIndex;
      console.log('Slide changed to: ', mySwiper.activeIndex);
      this.getCurrentMonthData();
    });
    this.getallmonthname();
    // mySwiper.appendSlide(['<div class="swiper-slide"><div class="swiper-lazy" data-background="'+ this.currentMonthData?.calendar_banner_style +'"><div class="swiper-lazy-preloader"></div></div>'])

  }

  async getallmonthname() {
    try {
      const data = await this.apiService.GetData().toPromise();
      this.monthList = data;
      this.getCurrentMonthData()
    } catch (error) {
      console.error('Error while fetching all month names:', error);
    }
  }

  async getCurrentMonthData() {
    let allMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    try {
      this.currentMonthData = await this.apiService.getcurrentmonthData(allMonths[this.currentIndex]);
    } catch (error) {
      console.error(`Error while fetching data for current month:`, error);
    }
  }
}
