import { Component, OnInit } from '@angular/core';

import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { 

  }

  ngOnInit() {
        $('.sidebarmenu').hide();
        $("i").click(function(){
        $('.sidebarmenu').animate({width: 'toggle'}, 200);

  });
  }

}
