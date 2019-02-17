import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent  {
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

  onSubmit(){
    this.signupForm.reset();
    console.log(this.signupForm);

  }



}
