import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import {Formdata} from './shared/formdata.model';

@Injectable()
export class FormService{

    formdata : Formdata  = {
        name : '',
        email : '',
        season : '',
        soil : '',
        state : '',
        area : '',
        comment : ''
    };
    constructor(private http:Http){}
    storeForms(formdata : Formdata){
     return this.http.post('https://ng-form-1a121.firebaseio.com/data.json',formdata);
    }
    getForms(){
        return this.http.get('https://ng-form-1a121.firebaseio.com/data.json');
    }

}