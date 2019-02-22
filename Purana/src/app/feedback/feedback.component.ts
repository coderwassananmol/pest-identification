import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormService } from '../form.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent  {
  forms =[{
    name : '',
    email : '',

  }
    


  ];

  constructor(private formService:FormService){}


  @ViewChild('f') signupForm:NgForm;
  areas = ['center','corner','sides'];
  answer= '';
  // onSubmit(form:NgForm){
  //   console.log(form,NgForm);
  // }

  suggestName(){
    const suggestedName ='Superuser';
    // this.signupForm.setValue({
    //   userData:{
    //     username:suggestedName,
    //     email:''
    //   },
    //   secret:''
    // })
    this.signupForm.form.patchValue({
      userData:{
        username:suggestedName
      }
    });
  }

  onSubmit(form : NgForm){
    // this.signupForm.reset();
    // console.log(this.signupForm);
    this.formService.storeForms(form.value)
    .subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );

  }

  onGet(){
    this.formService.getForms()
    .subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
  }



}
