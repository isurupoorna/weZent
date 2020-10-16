import { NewDriversComponent } from './Driver/new-drivers/new-drivers.component';
import { AdminComponent } from './admin/admin.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from "./login/login.component";

const routes: Routes = [
  {path : "", component : LoginComponent},
  {path : "admin", component : AdminComponent},
  {path : "admin/new-driver", component : NewDriversComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
