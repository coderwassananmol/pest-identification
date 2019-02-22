import { Component, OnInit } from '@angular/core';

import {Pest} from './pest.model';
import {Response } from '@angular/http'
import { DataStorageService } from '../shared/data-storage.service';


@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.css'],
  providers:[]
})
export class DocumentationComponent implements OnInit {

 
  constructor(private datastorageservice : DataStorageService) { }
 

  ngOnInit() {
    this.datastorageservice.getpest()
      .subscribe((response : Response) =>{
        const data = response.json();
        console.log(data);
       } , (err) => {
         console.log(err);
       })
  }

}
















