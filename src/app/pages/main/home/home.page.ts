import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employees } from 'src/app/models/employees.model';
import { UtilsService } from 'src/app/services/utils.service';
import { UpdateEmployeeComponent } from 'src/app/shared/components/update-employee/update-employee.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  router = inject(Router);
  utilsService = inject(UtilsService)
  currentPath: string = "";

  main = [
    {title: "Explorar", url: "/main/explore", icon: "search"},
  ]

  ngOnInit() {
  }


  async addUpdateEmployee(employee?:Employees){
    let modal = await this.utilsService.getModal({
      component: UpdateEmployeeComponent,
      cssClass: 'add-update-modal',
      componentProps: {employee}
    })
  }

}
