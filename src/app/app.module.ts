import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './Components/menu-bar/menu-bar.component';
import {MaterialModule} from './app.material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProjectsComponent } from './Components/projects/projects.component';
import { CertificatesComponent } from './Components/certificates/certificates.component';
import { HomeComponent } from './Components/home/home.component';
import { AboutComponent } from './Components/about/about.component';
import { SociallinksComponent } from './Components/sociallinks/sociallinks.component';
import { PdfloaderComponent } from './Components/pdfloader/pdfloader.component';
import { CertificateListDialogComponent } from './Components/certificate-list-dialog/certificate-list-dialog.component';
import { CertificatelistsexpansionComponent } from './Components/certificatelistsexpansion/certificatelistsexpansion.component';
import { YoutubeplayerComponent } from './Components/youtubeplayer/youtubeplayer.component';
import {ChatbotsComponent} from './Components/chatbots/chatbots.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    ProjectsComponent,
    CertificatesComponent,
    HomeComponent,
    AboutComponent,
    SociallinksComponent,
    PdfloaderComponent,
    CertificateListDialogComponent,
    CertificatelistsexpansionComponent,
    YoutubeplayerComponent,
    ChatbotsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [CertificateListDialogComponent, CertificatelistsexpansionComponent]
})
export class AppModule { }
