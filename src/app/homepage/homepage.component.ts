import { Component, OnInit } from '@angular/core';
import {HttpClient,HttpBackend} from '@angular/common/http'
import  {ApiCallService} from '../Shared/api-call.service'
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  
  data:any
  page = 1;
  imageurl= "https://image.tmdb.org/t/p/w500"
  totalPages: number= 500
  private urlClient : HttpClient;
  constructor( private handler : HttpBackend, private apiCall : ApiCallService) { 
    this.urlClient = new HttpClient(handler)
  }

  ngOnInit(): void {
this.firstAPI(this.page);
   this.apiCall.getMovieData(2179).subscribe((res:any)=>{
    //  console.log(res);
     
   })
  }
  firstAPI(page : number){
    this.apiCall.getData(page).subscribe((res:any)=>{
      console.log(typeof(res.body.total_pages))
      this.totalPages = res.body.total_pages
      this.data = res.body.results;
    })
  }
  pageChanged(event :any){
    this.page= event
    this.firstAPI(event)
  }
 
  onClickSubmit(event:any){
    console.log(event.search);
    this.apiCall.getSerchData(this.page ,event.search).subscribe((res:any)=>{
      this.totalPages = res.body.total_pages
      this.data = res.body.results;
      // console.log("data",res.body);
      
    })
  }
}
