import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ardmoamla',
  templateUrl: './ardmoamla.component.html',
  styleUrls: ['./ardmoamla.component.css']
})
export class ArdmoamlaComponent implements OnInit {
  data: any
  constructor() {

  }
  ngOnInit(): void {
    // Retrieve the state data from the ActivatedRoute
    this.data = history.state.data;
    console.log(this.data); // For debugging
  }
  printPage() {
    window.print();
  }

}
