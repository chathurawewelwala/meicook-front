import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WithdrawDepositComponent } from './withdraw-deposit.component';

const routes: Routes = [{ path: '', component: WithdrawDepositComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WithdrawDepositRoutingModule { }
