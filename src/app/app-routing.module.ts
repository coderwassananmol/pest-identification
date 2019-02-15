import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router'; 
import { HomeComponent } from './home/home.component';
import { PestDetectComponent } from './pest-detect/pest-detect.component';
import { FaqsComponent } from './faqs/faqs.component';
import { HelpComponent } from './help/help.component';
const appRoutes:Routes=[
    {path:'',redirectTo:'/recipes',pathMatch:'full'},
    { path:'home',component:HomeComponent},
    { path:'pest-detect',component:PestDetectComponent},
    { path:'home',component:HomeComponent},
    {path:'faqs',component:FaqsComponent},
    {path:'help',component:HelpComponent}

];
@NgModule({
  imports:[RouterModule.forRoot(appRoutes)],
  exports:[RouterModule]
})
export class AppRoutingModule{

}