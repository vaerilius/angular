import {Injectable} from '@angular/core';
import {PersonModel} from './person.model';

@Injectable({
  providedIn: 'root'
})
export class PersonService  {
  person: PersonModel = new PersonModel();

  constructor() {}

  getPerson() {
    return this.person;
  }



}
