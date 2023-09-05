import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
  standalone: true
})
export class CounterComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  count: number = 0;

  countUp() {
    this.count++;
  }
}
