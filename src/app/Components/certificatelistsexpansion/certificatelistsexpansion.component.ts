import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-certificatelistsexpansion',
  templateUrl: './certificatelistsexpansion.component.html',
  styleUrls: ['./certificatelistsexpansion.component.css']
})
export class CertificatelistsexpansionComponent implements OnInit {

  constructor(private router: Router,) { }

  @Input() coursesData;
  @Output() hidechild = new EventEmitter<boolean>();
  courselength;
  step = 0;

  ngOnInit() {
      this.courselength = Object.keys(this.coursesData.courses).length
  }

  openNewTab(url){
    window.open(url, '_blank');
  }

  setStep(index: number) {
    console.log(this.step)
    this.step = index;
  }

  nextStep() {
    console.log(this.step)
    this.step++;
  }

  prevStep() {
    console.log(this.step)
    this.step--;
  }

  goBack(){
    this.hidechild.emit(true);
  }

  

}
