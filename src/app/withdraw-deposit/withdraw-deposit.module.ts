import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WithdrawDepositRoutingModule } from './withdraw-deposit-routing.module';
import { WithdrawDepositComponent } from './withdraw-deposit.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [WithdrawDepositComponent],
  imports: [
    CommonModule,
    WithdrawDepositRoutingModule,
    MatInputModule,
    MatButtonModule,
    MatDividerModule,
    MatGridListModule,
  ],
})
export class WithdrawDepositModule {}
