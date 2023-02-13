import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Person } from './Person';
import { Document } from './Document';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LinkRestService {
  API_URL = 'http://localhost:8080';

  private person = '/person';
  private document = '/document';

  constructor(private http: HttpClient){}

  public getPerson(): String {
    return this.API_URL+this.person;
  }

  public getDocument(): String {
      return this.API_URL+this.document;
  }

  addPerson(save:Person):Observable<Person>{
    return this.http.post<Person>(this.getPerson()+"",save);
  }

  getPersonById(id:number):Observable<Person>{
      return this.http.get<Person>(this.getPerson()+"/"+id);
  }

  getAllDocument():Observable<Document[]>{
      return this.http.get<Document[]>(this.getDocument()+"",);
  }

  
}
