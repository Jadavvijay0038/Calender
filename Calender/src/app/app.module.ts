import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ApiServiceService } from './api-service.service';
import {MatCardModule} from '@angular/material/card';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyCD2_7qG-2rR6d7dnZIY6QjVVOcOLXnpI4",
  authDomain: "calender2023-e5814.firebaseapp.com",
  projectId: "calender2023-e5814",
  storageBucket: "calender2023-e5814.appspot.com",
  messagingSenderId: "753164082386",
  appId: "1:753164082386:web:8ab7eb831338416740a10b",
  measurementId: "G-4F3K1TYCCG"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule
  ],
  providers: [ApiServiceService],
  bootstrap: [AppComponent]
})
export class AppModule {


 }
