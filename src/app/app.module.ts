import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LeftComponent } from './left/left.component';
import { PestDetectComponent } from './pest-detect/pest-detect.component';
import { FaqsComponent } from './faqs/faqs.component';
import { HelpComponent } from './help/help.component';
import { AppRoutingModule } from './app-routing.module';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LeftComponent,
    PestDetectComponent,
    FaqsComponent,
    HelpComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
