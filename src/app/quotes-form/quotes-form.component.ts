import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quotes-form',
  templateUrl: './quotes-form.component.html',
  styleUrls: ['./quotes-form.component.css']
})
export class QuotesFormComponent implements OnInit {
  toggleForm = false;
  formToggle() {
    this.toggleForm = !this.toggleForm;
  }
  constructor() { }

  ngOnInit() {
  }

}
