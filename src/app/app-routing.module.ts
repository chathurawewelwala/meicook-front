import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'get-client',
    loadChildren: () =>
      import('./get-client/get-client.module').then((m) => m.GetClientModule),
  },
  {
    path: 'add-client',
    loadChildren: () =>
      import('./add-client/add-client.module').then((m) => m.AddClientModule),
  },
  {
    path: 'get-all-client',
    loadChildren: () =>
      import('./get-all-client/get-all-client.module').then(
        (m) => m.GetAllClientModule
      ),
  },
  {
    path: 'add-deposit',
    loadChildren: () =>
      import('./add-deposit/add-deposit.module').then(
        (m) => m.AddDepositModule
      ),
  },
  {
    path: 'withdraw-deposit',
    loadChildren: () =>
      import('./withdraw-deposit/withdraw-deposit.module').then(
        (m) => m.WithdrawDepositModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
