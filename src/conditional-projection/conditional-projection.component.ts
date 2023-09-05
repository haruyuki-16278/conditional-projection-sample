import { CommonModule } from '@angular/common';
import {
  Component,
  ContentChild,
  ContentChildren,
  Directive,
  Input,
  OnInit,
  QueryList,
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

  ngOnInit() {
    console.log(this.contents?.get(0))
  }

  private _flag: boolean = false;
  @Input()
  set flag(v: boolean) {
    console.log(v)
    this._flag = v;
  }
  get flag(): boolean {
    return this._flag;
  }

  @ContentChildren(ConditionalProjectionContentDirective)
  contents!: QueryList<ConditionalProjectionContentDirective>;
}
