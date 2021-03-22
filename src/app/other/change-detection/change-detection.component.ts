import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  AfterViewChecked,
  ChangeDetectorRef,
} from '@angular/core';
import { Todo } from '../../models/models';

@Component({
  // changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'change-detection-todo-item',
  template: `<span class="todo noselect"
      >Owner: {{ todo.owner.firstname }} / Description:
      {{ todo.description }} / is Completed:
      {{ todo.completed }}</span
    >
    <button (click)="onToggle()">onToggle()</button>
    <button (click)="toggleCompleatedLocal()">
      toggleCompleatedLocal
    </button>
    <div>PLACEHOLEDR: {{ placeholder }}</div>
    <div>randomStuff: {{ randomStuff }}</div> `,
})
export class ChangeDetectionComponent
  implements OnInit, AfterViewChecked {
  @Input() placeholder: string;
  @Input() todos: Todo;
  @Output() toggle = new EventEmitter<Object>();
  randomStuff = 'Start Random Stuff';
  todo;

  constructor(private cDRef: ChangeDetectorRef) {}

  onToggle() {
    this.toggle.emit(this.todos[0]);
  }

  toggleCompleatedLocal() {
    console.log('toggleCompleatedLocal', this.todos[0]);

    this.todos[0].completed = !this.todos[0].completed;
  }

  ngOnInit() {
    this.todo = this.todos[0];
  }

  ngAfterViewChecked() {
    console.log('changing status ...');
    // this.cDRef.detach()
    this.randomStuff = Math.random().toString();
    this.cDRef.detectChanges();
  }
}
