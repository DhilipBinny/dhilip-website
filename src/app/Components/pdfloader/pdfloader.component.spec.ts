import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfloaderComponent } from './pdfloader.component';

describe('PdfloaderComponent', () => {
  let component: PdfloaderComponent;
  let fixture: ComponentFixture<PdfloaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdfloaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdfloaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
