import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ardmarri',
  templateUrl: './ardmarri.component.html',
  styleUrls: ['./ardmarri.component.css']
})
export class ArdmarriComponent implements OnInit {

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
