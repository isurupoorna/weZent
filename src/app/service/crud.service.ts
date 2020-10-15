import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(public fireservices:AngularFirestore) { }

  create_newOne(Record)
  {
    return this.fireservices.collection('user').add(Record);
  }

}
