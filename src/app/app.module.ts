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
import { DocumentationService } from './documentation.service';
import { HttpModule } from '@angular/http';
import {FormsModule} from '@angular/forms';
import { FeedbackComponent } from './feedback/feedback.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LeftComponent,
    PestDetectComponent,
    FaqsComponent,
    HelpComponent,
    DocumentationComponent,
    FeedbackComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpModule,
    FormsModule
  ],
  providers: [DocumentationService],
  bootstrap: [AppComponent]
})
export class AppModule { }



