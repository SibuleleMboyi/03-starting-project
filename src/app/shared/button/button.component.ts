import { Component, Input } from '@angular/core';

@Component({
  selector: 'button[appButton]',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  // @Input()

  public greet() {
    console.log("I am a button element!");
  }
}
