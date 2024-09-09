import { Injectable, inject } from '@angular/core';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile,sendPasswordResetEmail } from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { User } from '../models/user.model';
import { doc, getDoc, getFirestore, setDoc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  //importar los modulos
  auth = inject(AngularFireAuth);
  firestore = inject(AngularFirestore);

  getAuth() {
    return getAuth();
  }
  //guarda el usuario
  signIn(user: User) {
    return signInWithEmailAndPassword(getAuth(), user.email, user.password);
  }
  //llama al usuario valido
  signUp(user: User) {
    return createUserWithEmailAndPassword(getAuth(), user.email, user.password);
  }

  updateUser(displayName: any) {
    return updateProfile(getAuth().currentUser, {displayName});
  }

  setDocument(path: any, data: any) {
    return setDoc(doc(getFirestore(), path), data);
  }

  async getDocument(path: any) {
    return (await getDoc(doc(getFirestore(), path))).data();
  }

  sendRecoveryEmail(email: string) {
    return sendPasswordResetEmail(getAuth(), email);
  }

  constructor() { }
}
