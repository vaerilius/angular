import {Component, ElementRef, OnInit} from '@angular/core';
import * as jQuery from 'jquery';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isShown = false;

  constructor(private elRef: ElementRef) { }

  ngOnInit() {
  }


}
