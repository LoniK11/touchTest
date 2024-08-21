import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiService } from 'src/Services/api.service';
import { Player } from '../Models/player.model';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit{

  form!:FormGroup;

  constructor(private api:ApiService){}

  ngOnInit(){
    this.form = new FormGroup({
      name: new FormControl('')
    })
  }

  submitForm(){
    if(this.form.get('name')?.value.length > 0){
      const name:Player = {
        name:this.form.get('name')?.value
      };
      console.log(name)
      this.api.addPlayer(name).subscribe(
        name => {
          console.log("Successfully created player!");
        },
        error => {
          console.log(error);
        } 
      )
    }
    // console.log(this.form.value)
  }

}
