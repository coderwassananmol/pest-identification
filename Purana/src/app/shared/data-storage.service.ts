import { Http } from '@angular/http';
import {Injectable} from '@angular/core';




@Injectable()
export class DataStorageService{

  
    constructor(private http:Http){}

     getpest(){
        return this.http.get('https:localhost:3000/documentation');
         
     } 

    }

  