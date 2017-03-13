import { NgModule } from '@angular/core';

import { routedComponents, UsersRoutingModule } from './users.routing';

import { UsersService } from './services/users.service';
import { UserFormService } from './services/userForm.service';
import { ParentService } from '../services/parent.service';
import { SharedData } from '../services/shared-data.service';

import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormControlService,DynamicFormComponent,FormComponents} from '../components/form'


@NgModule({
  imports: [ UsersRoutingModule,CommonModule,FormsModule,ReactiveFormsModule,NgbModule],
  declarations: [routedComponents,DynamicFormComponent,FormComponents],
  providers: [UsersService,ParentService,SharedData,FormControlService,UserFormService]
})
export class UsersModule { }
// avoids having to lazy load with loadChildren: "app/vehicles/vehicle.module#VehicleModule"
