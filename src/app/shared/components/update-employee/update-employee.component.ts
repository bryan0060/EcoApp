import { Component, inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from 'src/app/models/user.model';
import { FirebaseService } from 'src/app/services/firebase.service';
import { UtilsService } from 'src/app/services/utils.service';
@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.scss'],
})
export class UpdateEmployeeComponent  implements OnInit {
  firebaseService = inject(FirebaseService)
  utilsService = inject(UtilsService)

  user= {} as User;
  

  form = new FormGroup({
    id: new FormControl(''),
    destination: new FormControl('', [Validators.required]),
    presupuesto: new FormControl(null, [Validators.required, Validators.min(0)]),
    fecha: new FormControl('', [Validators.required])

  })

  ngOnInit() {
    this.user = this.utilsService.getLocalStorage('user');
  }

  async submit(){
    this.createEmployee();
      const loading = await this.utilsService.loading();

      await loading.present();

      

  
    
  }

  async createEmployee(){

    let path = `users/${this.user.uid}/rutas`;

    const loading = await this.utilsService.loading();
    await loading.present();

    delete this.form.value.id;

    this.firebaseService.addDocument(path, this.form.value)
    .then(async resp =>{
      this.utilsService.dismissModal({ success: true});

      this.utilsService.presentToast({
            message: `Ruta creada exitosamente`,
            duration: 1500,
            color: 'danger',
            position: 'bottom',
            icon: 'checkmark-circle-outline'
          })
          
         }).catch(error => {
          console.log(error);
          this.utilsService.presentToast({
            message: error.message,
            duration: 2500,
            color: 'danger',
            position: 'bottom',
            icon: 'alert-circle-outline'
          })

        })
        .finally(() => {
          loading.dismiss();
    })
  }
}
