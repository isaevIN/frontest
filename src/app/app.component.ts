import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LinkRestService } from './link-rest.service';
import { Person } from './Person';
import { Document } from './Document';
import { VirtualTimeScheduler } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  person$:Observable<Person>;
  addPersonAdd=false;
  addPersonEdit = false;
  errorFind=false;
  addPersonFrom = true;
  documents$:Observable<Document[]>;
  personLoad: Person;
  personFind="";
  personSave: Person = new Person();
  constructor(private link:LinkRestService){}
  
  ngOnInit(): void {
    this.documents$ = this.link.getAllDocument();
  }

  addPerson(){
    this.link.addPerson(this.personSave).subscribe();
    this.personSave = new Person();
    this.addPersonEdit=false;
    this.addPersonFrom = true;
  }

  editPerson(){
    this.link.addPerson(this.personLoad).subscribe();
    this.personLoad=null;
    this.addPersonEdit=false;
    this.addPersonFrom = true;
  }

  findPersonal(){
    this.link.getPersonById(Number(this.personFind))
    .subscribe((data)=>{
      this.personLoad = data;
      this.errorFind = false;
    }
    ,(error: any)=>{ 
      this.errorFind = true;
    });
  }

  addPersonEditebl(){
    if(this.addPersonAdd){
      this.addPersonAdd=false;
    } else{
      this.addPersonAdd=true;
    }
  }

  compare(item1, item2) {
    if(item2!=null){
        return item1.id === item2.id
    }   
  } 

  selectPersonal(){
    if(this.addPersonEdit){
      this.addPersonEdit=false;
      this.addPersonFrom = true;
    } else{
      this.addPersonEdit=true;
      this.addPersonFrom = false;
    }
    
  }
}
