import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddDepositRoutingModule } from './add-deposit-routing.module';
import { AddDepositComponent } from './add-deposit.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [AddDepositComponent],
  imports: [
    CommonModule,
    AddDepositRoutingModule,
    MatInputModule,
    MatButtonModule,
    MatDividerModule,
    MatGridListModule,
  ],
})
export class AddDepositModule {}
