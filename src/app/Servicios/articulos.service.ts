import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/share'



class Repo {
  constructor(public id:String, public name: String) {
    
  }
}

@Injectable({
  providedIn: 'root'
})

export class ArticulosService {
  public articulosCount:Number = 0;
  public repoObserver: Observable<Repo[]>
  public MainRepo: Repo;

  constructor(private _http: HttpClient) { 
    this.CountRepos();
    this.longitud()
    
  }
  
  obtener(){
    this.repoObserver = this._http.get("https://api.github.com/users/codigofacilito/repos")
    .map((reponse : any)=> { return reponse.map((r :any) => new Repo(r.id, r.name))})
    .share()
    
  }

  CountRepos (){
    fetch("https://api.github.com/users/codigofacilito/repos")
    .then(reposive => reposive.json())
    .then(repos => {
      const JsonRepo = repos[repos.length -1];
      this.MainRepo = new Repo(JsonRepo.id, JsonRepo.name );
      console.log(this.MainRepo)
    })
  }

  longitud(){
    fetch("https://api.github.com/users/codigofacilito/repos")
    .then((responsive)=> responsive.json())
    .then(repos => this.articulosCount = repos.length) 
  }

}

 // return new Repo(response[0].id, response[0].name) array de indice 0 id y name
  // return reponse[0] array de indice 0 toda la informacion

  
  // buildObsevable(): Observable<any>{
  //   let numero: number = 0
  //   return Observable.create(function (params:any) {
  //     setInterval(()=> params.next(),1000)
      
  //   })
      
  //   }
  
