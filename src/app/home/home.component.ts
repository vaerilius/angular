import { Component, OnInit } from '@angular/core';
import {PersonService} from '../person.service';
import {PersonModel} from '../person.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  person: PersonModel;

  constructor(private pService: PersonService) { }

  ngOnInit() {
    this.person = this.pService.getPerson();
  }

}
