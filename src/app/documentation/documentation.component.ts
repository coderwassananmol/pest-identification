import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.css']
})
export class DocumentationComponent implements OnInit {
  categories: string[] = ["Rice","Wheat","Vegetables","Maize","Rice","Wheat","Vegetables","Maize"];
  
  constructor() { }

  ngOnInit() {
  }

}
