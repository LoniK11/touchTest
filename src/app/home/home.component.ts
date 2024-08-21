import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{
  playerList:string[] = [
    'Player One',
    'Player Two',
    'Player Three'
  ]

  getWidth(){
    alert("Hello")
  }

}
