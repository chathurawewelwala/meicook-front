import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddClientRoutingModule } from './add-client-routing.module';
import { AddClientComponent } from './add-client.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [AddClientComponent],
  imports: [
    CommonModule,
    AddClientRoutingModule,
    MatInputModule,
    MatButtonModule,
    MatDividerModule,
    MatGridListModule,
  ],
})
export class AddClientModule {}
