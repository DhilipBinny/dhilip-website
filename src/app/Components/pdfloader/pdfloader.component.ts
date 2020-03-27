import { Component, OnInit, Input } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-pdfloader',
  templateUrl: './pdfloader.component.html',
  styleUrls: ['./pdfloader.component.css']
})
export class PdfloaderComponent implements OnInit {

  @Input()  pdf_soruce
  url: SafeResourceUrl;
  constructor( public sanitizer:DomSanitizer, readonly activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      console.log(params)
      if (params['pdf_src']){
        this.pdf_soruce = params['pdf_src'];
        console.log(`${this.pdf_soruce}`);
        this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.pdf_soruce); 
        }
      });
  }

  

}
