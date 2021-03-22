import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.scss'],
})
export class OtherComponent implements OnInit {
  constructor() {}

  placeholder = 'This is placeholder'

  todos: any = [{
    id: 1,
    description: 'buy milk',
    completed: false,
    owner: {
      firstname: 'pawel',
      lastname: 'Lesniowski',
    },
  }];

  ngOnInit(): void {
    console.log('OtherComponent loaded');
  }

  handleToggle() {
    console.log('handleToggle', this.todos[0]);
    this.todos[0].completed = !this.todos[0].completed
  }

  toggleCompleatedParent() {
    console.log('toggleCompleatedParent', this.todos[0]);
    this.todos[0].completed = !this.todos[0].completed;
  }
}
