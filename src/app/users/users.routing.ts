import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersListComponent} from './users.list/users-list.component';
import { UserComponent } from './user/user.component';
import { UsersComponents} from './users.component';

const routes: Routes = [
  {
    path: '',
    component:UsersComponents ,
    children: [
      {
        path: '',
        component: UsersListComponent,
      },
      {
        path: 'abm',
        component: UserComponent,
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }

export const routedComponents = [UsersComponents,UsersListComponent, UserComponent];
