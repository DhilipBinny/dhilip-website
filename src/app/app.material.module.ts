import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatRippleModule} from '@angular/material/core';
import {MatDialogModule} from '@angular/material/dialog';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatBadgeModule} from '@angular/material/badge';
// import { CarouselModule } from 'ngx-owl-carousel-o'
// import { YouTubePlayerModule } from '@angular/youtube-player';
import { Ng2CustomCarouselModule } from 'ng2-custom-carousel';

const MODULES = [
   BrowserAnimationsModule,
   MatToolbarModule,
   MatIconModule,
   MatMenuModule,
   MatButtonModule,
   FlexLayoutModule,
   MatSidenavModule,
   MatCardModule,
   MatGridListModule,
   MatDividerModule,
   MatListModule,
   MatRippleModule,
   MatDialogModule,
   MatExpansionModule,
   MatBadgeModule,
//    CarouselModule,
//    YouTubePlayerModule
   Ng2CustomCarouselModule
];

@NgModule({
    imports: MODULES,
    exports: MODULES
})

export class MaterialModule { }