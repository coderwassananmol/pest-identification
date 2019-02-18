import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
@Injectable()
export class DocumentationService{
    constructor(private http:Http){}
    storeDocumentation(documentation:any[]){
        return this.http.post('',documentation);
    }
   
}