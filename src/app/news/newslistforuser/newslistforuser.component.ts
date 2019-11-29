import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../service/news.service';
import { Router } from '@angular/router';
import { News } from '../../model/news';

@Component({
  selector: 'app-newslistforuser',
  templateUrl: './newslistforuser.component.html',
  styleUrls: ['./newslistforuser.component.css']
})
export class NewslistforuserComponent implements OnInit {
  nl:Array<News>;
  constructor(
    private newsservice:NewsService,
    private router:Router
  ) { }

  ngOnInit() {
    this.loadNewsList();

  }


  private loadNewsList(){
    this.nl=new Array();
    
      this.newsservice.getNewsList()
      .then((data:any)=>{
    this.nl=data;
    
    
      })
    
    }



    
    toDetail(id:string){

      this.router.navigate(['detail',id]);
  
      }

}