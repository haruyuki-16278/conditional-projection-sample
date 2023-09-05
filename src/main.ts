import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import {
  ConditionalProjectionComponent,
  ConditionalProjectionContentDirective,
} from './conditional-projection/conditional-projection.component';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [
    CommonModule,
    ConditionalProjectionComponent,
    ConditionalProjectionContentDirective,
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
        <p>conditional-projection works!</p>
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
