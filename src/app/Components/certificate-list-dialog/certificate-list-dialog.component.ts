import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-certificate-list-dialog',
  templateUrl: './certificate-list-dialog.component.html',
  styleUrls: ['./certificate-list-dialog.component.css']
})
export class CertificateListDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<CertificateListDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data) {
      console.log(data)
      this.coursesData = data
      this.courselength = Object.keys(this.coursesData.courses).length

      console.log(this.courselength)
    }
  ngOnInit() {
   
  }
  coursesData;
  courselength;

  onNoClick(): void {
    this.dialogRef.close();
  }

  openNewTab(url){
    window.open(url, '_blank');
  }

  step = 0;

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

}
