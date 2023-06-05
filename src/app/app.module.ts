import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';

import { CustomButtonComponent } from './components/custom-button/custom-button.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { NgxSemanticModule } from 'ngx-semantic';

@NgModule({
  declarations: [AppComponent, HomepageComponent, CustomButtonComponent],
  imports: [BrowserModule, ToastrModule.forRoot(), BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
