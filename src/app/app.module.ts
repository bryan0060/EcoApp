import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { initializeApp } from "firebase/app";

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

export const firebaseConfig = {
  apiKey: "AIzaSyChn1xnQUCEJziTehCzjnZK7b_-vNzg4EQ",
  authDomain: "empleados-aaff6.firebaseapp.com",
  projectId: "empleados-aaff6",
  storageBucket: "empleados-aaff6.appspot.com",
  messagingSenderId: "524421678733",
  appId: "1:524421678733:web:476c835a7c83b5177744c4",
  measurementId: "G-81EZ49XQHD"
};

initializeApp(firebaseConfig);

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule
   ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
