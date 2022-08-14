import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetAllClientComponent } from './get-all-client.component';

const routes: Routes = [{ path: '', component: GetAllClientComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GetAllClientRoutingModule { }
