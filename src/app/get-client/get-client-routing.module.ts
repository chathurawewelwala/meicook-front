import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetClientComponent } from './get-client.component';

const routes: Routes = [{ path: '', component: GetClientComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GetClientRoutingModule { }
