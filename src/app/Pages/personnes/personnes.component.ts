
import { Component, OnInit} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Person } from 'src/app/Interfaces/person';
import { PersonService } from 'src/app/_Services/person.service';
import { FormGroup } from '@angular/forms';
import { Validators , FormControl } from '@angular/forms';

@Component({
  selector: 'app-personnes',
  templateUrl: './personnes.component.html',
  styleUrls: ['./personnes.component.css']
})
export class PersonnesComponent implements OnInit {

  model :any = {};
  data: Person[]=[];
  hide = true;

  exform = new FormGroup({
    first_name: new FormControl('',Validators.required),
    last_name: new FormControl('', Validators.required),
    login : new FormControl('', [Validators.email , Validators.required]),
    password : new FormControl('',Validators.required),
    cin : new FormControl('', [Validators.required, Validators.minLength(8),Validators.maxLength(8)]),
    adresse : new FormControl('', Validators.required)
  })

 get first_name(){return this.exform.get('first_name')}
 get last_name(){return this.exform.get('last_name')}
 get login(){return this.exform.get('login')}
 get password(){return this.exform.get('password')}
 get cin(){return this.exform.get('cin')}
 get adresse(){return this.exform.get('adresse')}
  
  constructor(private PersonService:PersonService  ) { }

  ngOnInit(): void {
      
  }
   

  
  displayedColumns=
   ['FirstName',
   'LastName',
   'Cin' ,
   'Adresse',
   'Activation',
   'Role',
   'ServiceDepartment',
  'Action',
  ];

  dataSource = new MatTableDataSource(this.data);


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.model.filter = filterValue.trim().toLowerCase();
  }

  addPersonne() {
    console.log(this.model)
    this.PersonService.addPersonne(this.model).subscribe(reponse => {
      
      console.log(reponse)
      

    this.getPerson()
  }, error => {
    console.log(error)
  });
  }


getPerson(){
  this.PersonService.getpersons().subscribe(person => {
    this.data = person;
    console.log(this.dataSource)
  }, error => {
    console.log(error)
  });
}

Delete(){
  console.log('hello')
}


}
