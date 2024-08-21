import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Player } from '../Models/player.model';
import { Team } from '../Models/team.model';
import { ApiService } from 'src/Services/api.service';
import { Result } from '../Models/result.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  playerList:Player[] = [];
  teamList:Team[] = [];
  goalsList:number[] = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

  form!:FormGroup;

  constructor(private api: ApiService){}

  async ngOnInit(){
    this.form = new FormGroup({
      playerOneName: new FormControl('',Validators.required),
      playerOneTeam: new FormControl('',Validators.required),
      playerOneGoals: new FormControl('',Validators.required),

      playerTwoName: new FormControl('',Validators.required),
      playerTwoTeam: new FormControl('',Validators.required),
      playerTwoGoals: new FormControl('',Validators.required)
    })

    this.playerList = await this.api.getAllPlayers().toPromise() as Player[];
    this.teamList = await this.api.getAllTeams().toPromise() as Team[];
  }

  submitForm(){
    const result:Result = {
      playerOneName: this.form.get('playerOneName')?.value.name,
      playerOneTeam: this.form.get('playerOneTeam')?.value.name,
      playerOneGoals: this.form.get('playerOneGoals')?.value,
      playerTwoName: this.form.get('playerTwoName')?.value.name,
      playerTwoTeam: this.form.get('playerTwoTeam')?.value.name,
      playerTwoGoals: this.form.get('playerTwoGoals')?.value
    }

    if(this.form.valid){
      console.log(result);
    }
  }

}
