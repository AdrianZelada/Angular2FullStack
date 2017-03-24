import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule  } from '@angular/http';

import { AppComponent } from './app.component';
import { appRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import {CommonModule} from '@angular/common';

// import { HomeComponent } from './home/home.component';
// import { AboutComponent } from './about/about.component';
// import { DataService } from './services/data.service';
import { ParentService } from './services/parent.service';
// import { UsersService } from './services/users.service';
// import { SettingsService } from './services/settings.service';

import { NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { ToastComponent } from './shared/toast/toast.component';
// const routing = RouterModule.forRoot([
//     { path: '',      component: HomeComponent },
//     { path: 'about', component: AboutComponent }
// ]);
import { AuthService } from './services/auth.service';

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
    NgbModule.forRoot(),
    // routing
    appRoutingModule
  ],
  providers: [
    // DataService,
    ParentService,
    AuthService,
    // UsersService,
    // SettingsService,
    ToastComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})

export class AppModule { }
