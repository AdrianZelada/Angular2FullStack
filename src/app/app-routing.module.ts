/**
 * Created by iZel on 3/6/17.
 */
import {NgModule} from '@angular/core';
import { PreloadAllModules, Routes, RouterModule } from '@angular/router';

const routes : Routes=[
  { path:'', pathMatch:'full', redirectTo:'users'},
  { path:'users',loadChildren:'app/users/users.module#UsersModule'}
];

@NgModule({
  imports : [RouterModule.forRoot(routes,{ preloadingStrategy: PreloadAllModules,useHash:true })],
  exports: [RouterModule],
})


export class appRoutingModule{}
