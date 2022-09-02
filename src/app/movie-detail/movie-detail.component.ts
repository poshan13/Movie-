import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpBackend, HttpClient } from '@angular/common/http'
import { ApiCallService } from '../Shared/api-call.service'
@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  data : any
  imageurl= "https://image.tmdb.org/t/p/w500"
  private urlClient: HttpClient
  constructor(private route: ActivatedRoute,
    private handler: HttpBackend,
    private apicall: ApiCallService
  ) {
    this.urlClient = new HttpClient(handler)
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: any) => {
      this.apicall.getMovieData(params.id).subscribe((res: any) => {
        this.data = res.body

      })
    });
  }

}
