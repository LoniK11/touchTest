import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  opened:boolean = false;

  optionList:string[] = [
    'home',
    'add player',
    'add team',
    'all results'
  ]

  constructor(private router: Router){}

  navigateTo(option: string){
    const path = option.replace(/ /g,'-');
    this.router.navigate([path]);
    this.opened = false;
  }
}
