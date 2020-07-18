import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ImageCropperModule } from 'ngx-image-cropper';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ImageCropperModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
