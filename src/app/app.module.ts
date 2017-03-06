import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {appRoutingModule} from './app-routing.module';
import { RouterModule } from '@angular/router';
import {CommonModule} from '@angular/common';

// import { HomeComponent } from './home/home.component';
// import { AboutComponent } from './about/about.component';
// import { DataService } from './services/data.service';
import { ParentService } from './services/parent.service';
// import { UsersService } from './services/users.service';
// import { SettingsService } from './services/settings.service';

import { ToastComponent } from './shared/toast/toast.component';

// const routing = RouterModule.forRoot([
//     { path: '',      component: HomeComponent },
//     { path: 'about', component: AboutComponent }
// ]);

@NgModule({
  declarations: [
    AppComponent,
    // HomeComponent,
    // AboutComponent,
    // ToastComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    // routing
    appRoutingModule
  ],
  providers: [
    // DataService,
    ParentService,
    // UsersService,
    // SettingsService,
    ToastComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})

export class AppModule { }
