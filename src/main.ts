import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import {
  ConditionalProjectionComponent,
  ConditionalProjectionContentDirective,
} from './conditional-projection/conditional-projection.component';
import { CounterComponent } from './counter/counter.component';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [
    CommonModule,
    ConditionalProjectionComponent,
    ConditionalProjectionContentDirective,
    CounterComponent
  ],
  template: `
    <h1>Hello from {{ name }}!</h1>
    <a target="_blank" href="https://angular.io/start">
      Learn more about Angular
    </a>
    <br>
    <button (click)="toggleFlag()">toggle</button>
    <app-conditional-projection [flag]="flag">
      <ng-template appConditionalProjectionContent>
        <app-counter></app-counter>
        <p>this is first</p>
      </ng-template>
      <ng-template appConditionalProjectionContent>
        <app-counter></app-counter>
        <p>this is second</p>
      </ng-template>
      <ng-template appConditionalProjectionContent>
        <p>this is third</p>
      </ng-template>
    </app-conditional-projection>
  `,
})
export class App {
  name = 'Angular';
  flag = true;

  protected toggleFlag() {
    this.flag = !this.flag;
  }
}

bootstrapApplication(App);
