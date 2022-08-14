import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDepositComponent } from './add-deposit.component';

const routes: Routes = [{ path: '', component: AddDepositComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddDepositRoutingModule { }
