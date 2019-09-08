import {Component, ElementRef, OnInit} from '@angular/core';
import {faGithub, faLinkedinIn} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
github = faGithub
linked = faLinkedinIn

  constructor(private elRef: ElementRef) { }

  ngOnInit() {
  }


}
