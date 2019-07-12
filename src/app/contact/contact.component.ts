import {Component, OnInit} from '@angular/core';




@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  name: string;
  email: string;
  phone: string;
  message: string;
  form: string;

  constructor() {
    this.form = 'email.php';
  }

  ngOnInit() {
  }

  processForm() {
    const allInfo = `My name is ${this.name}. My email is ${this.email}. My message is ${this.message}`;
    console.log(allInfo);
    this.sendMail(allInfo);
    this.clearFields();
  }

  private clearFields() {
    this.name = '';
    this.email = '';
    this.phone = '';
    this.message = '';
  }

  private sendMail(allInfo: string) {

  }
}
