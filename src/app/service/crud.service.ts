import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from "@angular/router";
import { auth } from "firebase";

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  authState: any = null;

  constructor(public fireservices:AngularFirestore,private afu: AngularFireAuth,private router: Router) {
    this.afu.authState.subscribe((auth =>
      this.authState = auth
      ))
   }

  create_newOne(Record)
  {
    return this.fireservices.collection('user').add(Record);
  }

  loginWithEmail(email : string, password: string)
  {
    return this.afu.signInWithEmailAndPassword(email, password)
      .then((user) => {
        this.authState = user
      })
    .catch(error => {
      console.log(error)
      throw error
  });


  }


}
