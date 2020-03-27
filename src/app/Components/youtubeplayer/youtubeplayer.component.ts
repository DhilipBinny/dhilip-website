import { Component, OnInit, NgModule } from '@angular/core';
// import { OwlOptions } from 'ngx-owl-carousel-o';
// import Flickity from 'angular-flickity'

@Component({
  selector: 'app-youtubeplayer',
  templateUrl: './youtubeplayer.component.html',
  styleUrls: ['./youtubeplayer.component.css']
})
export class YoutubeplayerComponent implements OnInit {
  flickityOptions;
  constructor( ) {
    // this.flickityOptions = new Flickity( '.gallery', {
    //   accessibility: true,
    //   adaptiveHeight: false,
    //   cellAlign: 'center',
    //   draggable: '>1',
    //   lazyLoad: true,
    //   prevNextButtons: true,
    //   resize: true,

    // })
   }

  links = {
    1:"https://www.youtube.com/embed/Do97F1bOu3Q",
    2:"https://www.youtube.com/embed/6DBSEdOVnBU",
    3:"https://www.youtube.com/embed/JZwTjJQTgW8",
    4:"https://www.youtube.com/embed/kNdEQ4vlUEQ",
    5:"https://www.youtube.com/embed/7NzN4Q2c3Do"
  }
  
  ngOnInit() {

  }

  

}
