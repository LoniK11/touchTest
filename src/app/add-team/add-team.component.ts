import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiService } from 'src/Services/api.service';
import { Team } from '../Models/team.model';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css']
})
export class AddTeamComponent implements OnInit{

  form!:FormGroup;

  constructor(private api: ApiService){}

  ngOnInit(){
    this.form = new FormGroup({
      name: new FormControl('')
    })
  }

  submitForm(){
    console.log(this.form.value);
    if(this.form.get('name')?.value.length > 0){
      const team:Team = {
        name: this.form.get('name')?.value
      }
      this.api.addTeam(team).subscribe(
        team => {
          console.log("Successfully added team");
        },
        error => {
          console.log(error)
        }
      )
    }
  }
}
