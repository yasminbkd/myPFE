import { Component, OnInit } from '@angular/core';
import { Role } from 'src/app/Interfaces/role';
import { FormGroup } from '@angular/forms';
import { Validators , FormControl } from '@angular/forms';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {

  model :any = {};
  data: Role[]=[];

  exform = new FormGroup({
    role: new FormControl('',Validators.required)
  })

  get role (){return this.exform.get('role')}

  constructor() { }

  ngOnInit(): void {
  }

   ELEMENT_DATA: Role[] = [
    {iD_Role:'1',Libelle_Role: 'Super admin'},
  ];

  dataSource = this.ELEMENT_DATA;


  displayedColumns=
   ['Roles',
   'Action'
  
  ];

}
