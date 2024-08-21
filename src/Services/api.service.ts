import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Player } from 'src/app/Models/player.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private url:string = 'http://localhost:3000';

  constructor(private http: HttpClient){}

  //Players
  addPlayer(player: Player){
    return this.http.post(`${this.url}/player`,player);
  }

  getAllPlayers(){
    return this.http.get<Player[]>(`${this.url}/player`);
  }

  //Teams
  addTeam(team: any){
    return this.http.post(`${this.url}/team`,team);
  }

  getAllTeams(){
    return this.http.get<any>(`${this.url}/team`);
  }

  //Results
  addResult(result: any){
    return this.http.post(`${this.url}/result`,result);
  }

  getAllResults(){
    return this.http.get(`${this.url}/result`);
  }


}
