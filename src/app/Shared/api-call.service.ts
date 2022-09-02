import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  constructor(private http: HttpClient) { }
  getHeader(): any {
    return new HttpHeaders().set('Accept', 'application/json')
  }
  getData(page:number){
    return this.http.get("https://api.themoviedb.org/3/movie/popular",{
      params: {
        "api_key": environment.api_key,
        "language":"en-US",
        "page":page,
      }, 
    headers:this.getHeader(),
      observe:'response'
    })
  }

  getSerchData(page:number,query:string){
    return this.http.get("https://api.themoviedb.org/3/search/movie",{
      params: {
        "api_key": environment.api_key,
        "language":"en-US",
        "page":page,
        "query":query
      }, 
    headers:this.getHeader(),
      observe:'response'
    })

  }

  getMovieData(id:number){
    return this.http.get('https://api.themoviedb.org/3/movie/'+id,{
      params: {
        "api_key": environment.api_key,
        "language":"en-US",
      }, 
    headers:this.getHeader(),
      observe:'response'
    })
  }
}
