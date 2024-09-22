import { Component, inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
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
  

  form = new FormGroup({
    id: new FormControl(''),
    destination: new FormControl('', [Validators.required]),
    //img: new FormControl('', [Validators.required]),
    presupuesto: new FormControl('', [Validators.required, Validators.min(0)]),
    fecha: new FormControl('', [Validators.required])

  })

  ngOnInit() {
  }

  async submit(){
    console.log(this.form.value);
 //   if(this.form.valid){
      const loading = await this.utilsService.loading();

      await loading.present();

  
    
  }

}
