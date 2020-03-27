import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CertificatesComponent} from './Components/certificates/certificates.component'
import {HomeComponent} from './Components/home/home.component'
import {ProjectsComponent} from './Components/projects/projects.component'
import {AboutComponent} from './Components/about/about.component'
import{PdfloaderComponent} from './Components/pdfloader/pdfloader.component'
import{YoutubeplayerComponent} from './Components/youtubeplayer/youtubeplayer.component'
import{ChatbotsComponent} from './Components/chatbots/chatbots.component'

const routes: Routes = [
  { path:'', component:HomeComponent },
  { path:'home', component:HomeComponent },
  { path:'about', component:AboutComponent },
  { path:"projects", component:ProjectsComponent},
  { path:"chatbots", component:ChatbotsComponent},
  { path:"pdfload/:pdf_src", component:PdfloaderComponent},
  { path:"certificates", component:CertificatesComponent},
  { path:'**', redirectTo:"/",pathMatch:'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
