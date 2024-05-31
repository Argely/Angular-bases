import { Component } from "@angular/core";



@Component({
  selector: 'counter-app',
  template: `<h2>Counter Component</h2>
             <p>Counter: {{ counter }}</p>
    	       <button (click)="increasedBy(1)">+1</button>
             <button (click)="reset()" >Reset</button>
             <button (click)="increasedBy(-1)">-1</button>
  `

})

export class CounterComponent {

  public counter: number = 0;

  increasedBy( value: number ) : void {

    this.counter += value

  }

  reset() : void {
    this.counter = 0;
  }


}
