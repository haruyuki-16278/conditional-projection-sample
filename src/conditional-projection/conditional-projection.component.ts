import { CommonModule } from '@angular/common';
import {
  Component,
  ContentChild,
  Directive,
  Input,
  OnInit,
  TemplateRef,
} from '@angular/core';

@Directive({
  selector: '[appConditionalProjectionContent]',
  standalone: true,
})
export class ConditionalProjectionContentDirective {
  constructor(public templateRef: TemplateRef<unknown>) {}
}

@Component({
  selector: 'app-conditional-projection',
  templateUrl: './conditional-projection.component.html',
  styleUrls: ['./conditional-projection.component.css'],
  imports: [CommonModule, ConditionalProjectionContentDirective],
  standalone: true,
})
export class ConditionalProjectionComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  private _flag: boolean = false;
  @Input()
  set flag(v: boolean) {
    console.log(v)
    this._flag = v;
  }
  get flag(): boolean {
    return this._flag;
  }

  @ContentChild(ConditionalProjectionContentDirective)
  content!: ConditionalProjectionContentDirective;
}
