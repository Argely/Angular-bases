import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroesList: string[] = ['Deadpool', 'Wolverine', 'Thor', 'Hawkeye', 'Starlord']
  public deletedHero?: string

  deleteHero(): void {

    this.deletedHero = this.heroesList.pop();

  }

}
