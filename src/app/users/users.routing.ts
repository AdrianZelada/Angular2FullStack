import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersListComponent} from './users.list/users-list.component';
import { UserComponent } from './user/user.component';
import { CardUser } from './cards/card-user.component';
import { CardsList} from './card.list/cards-list.component';
import { UsersComponents} from './users.component';
import { GuardAuthUser} from '../services/guard-auth.service'

const routes: Routes = [
  {
    path: '',
    component:UsersComponents,
    // canActivate:[GuardAuthUser],
    // canActivateChild:[GuardAuthUser],
    children: [
      {
        path: '',
        component: UsersListComponent,
      },
      {
        path: 'abm',
        component: UserComponent,
        // canActivate:[GuardAuthUser]
      },
      {
        path: 'cards',
        component: CardsList,
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }

export const routedComponents = [UsersComponents,UsersListComponent, UserComponent,CardUser,CardsList];
