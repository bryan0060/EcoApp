import { Injectable, inject } from '@angular/core';
import { AngularFireAuth} from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile, sendPasswordResetEmail} from 'firebase/auth';
import { User } from '../models/user.model';
import { doc, getFirestore, setDoc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  auth = inject(AngularFireAuth)
  firestore = inject(AngularFirestore)

  getAuth() {
    return getAuth();
  }

  signIn(user: User){
    return signInWithEmailAndPassword(getAuth(), user.email, user.password);
  }

  signUp(user: User){
    return createUserWithEmailAndPassword(getAuth(), user.email, user.password);
  }

  updateUser(displayName: any){
    return updateProfile(getAuth().currentUser, {displayName});
  }

  setDocument(path: any, data: any){
    return setDoc(doc(getFirestore(), path), data)
  }
}