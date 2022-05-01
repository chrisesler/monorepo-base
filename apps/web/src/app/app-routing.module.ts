import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthService } from 'libs/core/src/services/auth.service';

const routes: Routes = [
    {
        path: '',
        loadChildren: () =>
            import('@cesler/feature/lazy/home').then((m) => m.HomeModule),
    },
    {
        path: 'examples',
        loadChildren: () =>
            import('@cesler/feature/lazy/examples').then(
                (m) => m.ExamplesModule
            ),
    },
    /*{
    path: 'login',
    loadChildren: () => import('./user/user.module').then(m => m.UserModule)
  },
  {
    path: 'kanban',
    loadChildren: () =>
      import('./kanban/kanban.module').then(m => m.KanbanModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'customers',
    loadChildren: () =>
      import('./customers/customers.module').then(m => m.CustomersModule),
  }*/
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            initialNavigation: 'enabled',
        }),
    ],
    exports: [RouterModule],
    providers: [AuthService]
})
export class AppRoutingModule {}
