import { NgModule } from '@angular/core';

import { routedComponents, UsersRoutingModule } from './users.routing';

import { UsersService } from './services/users.service';
import { ParentService } from '../services/parent.service';

import { CommonModule } from '@angular/common';


@NgModule({
  imports: [ UsersRoutingModule,CommonModule],
  declarations: [routedComponents],
  providers: [UsersService,ParentService]
})
export class UsersModule { }
// avoids having to lazy load with loadChildren: "app/vehicles/vehicle.module#VehicleModule"
