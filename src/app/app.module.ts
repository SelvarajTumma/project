import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { Cmp1Component } from './cmp1/cmp1.component';
import { Cmp3Component } from './cmp3/cmp3.component';
import { Cmp2Component } from './cmp2/cmp2.component';
import { Cmp4Component } from './cmp4/cmp4.component';
import { DummyComponent } from './dummy/dummy.component';
import { AppRoutingModule } from './dummy/app-routing.module';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [
    AppComponent,
    Cmp1Component,
    Cmp3Component,
    Cmp2Component,
    Cmp4Component,
    DummyComponent,

  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,  CommonModule  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
