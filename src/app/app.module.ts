import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule} from '@angular/fire/firestore';
import { AngularFireDatabase, AngularFireDatabaseModule } from "@angular/fire/database";
import { environment } from '../environments/environment';

import { CrudService } from "./service/crud.service";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { NewDriversComponent } from './Driver/new-drivers/new-drivers.component';
import { ManageDriversComponent } from './Driver/manage-drivers/manage-drivers.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    NewDriversComponent,
    ManageDriversComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule
  ],
  providers: [CrudService],
  bootstrap: [AppComponent]
})
export class AppModule { }
