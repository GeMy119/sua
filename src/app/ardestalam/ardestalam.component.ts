import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ardestalam',
  templateUrl: './ardestalam.component.html',
  styleUrls: ['./ardestalam.component.css']
})
export class ArdestalamComponent implements OnInit {
  data: any
  constructor() { }
  printPage(): void {
    window.print();
  }

  ngOnInit(): void {
    // Retrieve the state data from the ActivatedRoute
    this.data = history.state.data;
    console.log(this.data); // For debugging
  }

}
