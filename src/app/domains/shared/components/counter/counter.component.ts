import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  @Input({required: true}) duration: number = 0;
  @Input({required: true}) message: string = '';

  constructor() {
    //NO ASYNC
    //BEFORE RENDER
    console.log("Constructor")
    console.log("-".repeat(10))
  }
  
  ngOnChange(changes: SimpleChanges) {
    //BEFORE RENDER AND DURING
    console.log("ngOnChange")
    console.log(changes)
    console.log("-".repeat(10))
  }
}
