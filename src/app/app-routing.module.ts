import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router'; 
import { HomeComponent } from './home/home.component';
import { PestDetectComponent } from './pest-detect/pest-detect.component';
import { FaqsComponent } from './faqs/faqs.component';
import { HelpComponent } from './help/help.component';
import { DocumentationComponent } from './documentation/documentation.component';
import { FeedbackComponent } from './feedback/feedback.component';
const appRoutes:Routes=[
    {path:'',redirectTo:'/home',pathMatch:'full'},
    { path:'home',component:HomeComponent},
    { path:'pest-detect',component:PestDetectComponent},
    {path:'faqs',component:FaqsComponent},
    {path:'help',component:HelpComponent},
    {path:'documentation',component:DocumentationComponent},
    {path:'feedback',component:FeedbackComponent},
     
];
@NgModule({
  imports:[RouterModule.forRoot(appRoutes)],
  exports:[RouterModule]
})
export class AppRoutingModule{

}