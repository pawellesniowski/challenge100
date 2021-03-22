import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toggle-button',
  templateUrl: './toggle-button.component.html',
  styleUrls: ['./toggle-button.component.scss']
})
export class ToggleButtonComponent implements OnInit {
  @Input() isOn: boolean = false;
  @Output() buttonState = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  setOnOff(){
    this.isOn = !this.isOn;
    this.buttonState.emit(this.isOn);
  }

}
