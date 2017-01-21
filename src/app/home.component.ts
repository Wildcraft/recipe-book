import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rb-home',
  template: `
    <h1> <b>
      Welcome to Recipe Book!!!
    </b></h1>
  `,
  styles: []
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
