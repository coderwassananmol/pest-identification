import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LeftComponent } from './left/left.component';
import { PestDetectComponent } from './pest-detect/pest-detect.component';
import { FaqsComponent } from './faqs/faqs.component';
import { HelpComponent } from './help/help.component';
import { AppRoutingModule } from './app-routing.module';
import { DocumentationComponent } from './documentation/documentation.component';
import {RouterModule} from '@angular/router';
import { SubfaqsComponent } from './faqs/subfaqs/subfaqs.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LeftComponent,
    PestDetectComponent,
    FaqsComponent,
    HelpComponent,
    DocumentationComponent,
    SubfaqsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



