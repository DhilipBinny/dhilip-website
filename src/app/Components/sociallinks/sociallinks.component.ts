import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-sociallinks',
  templateUrl: './sociallinks.component.html',
  styleUrls: ['./sociallinks.component.css']
})
export class SociallinksComponent implements OnInit {

  constructor() { }

  @Input() isfooter 
  @Input() height 

  social_links = {
    "assets/icons/linkedin.png":"https://www.linkedin.com/in/dhilipbinny/",
    "assets/icons/github.png":"https://github.com/DhilipBinny",
    "assets/icons/twitter.png":"https://twitter.com/Dhilipk53338237",
    "assets/icons/datacamp_logo.png" :"https://www.datacamp.com/profile/dhilipbinny"
  }

  ngOnInit() {

  }

}
