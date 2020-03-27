import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  isfooter = false;
  ngOnInit() {
    var typed = new Typed('.typed', {
      strings: ["Designer.", "Developer.", "Freelancer."],
      typeSpeed: 200,
      loop: true
  });
  }

}
