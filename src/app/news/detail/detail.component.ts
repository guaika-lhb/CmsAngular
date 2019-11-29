import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NewsService } from '../../service/news.service';
import { News } from '../../model/news';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  [x: string]: any;
  parm:string;
   news:News;

  constructor(
    private router:Router,
  private routerinfo:ActivatedRoute,
  private newsservice:NewsService
  ) { 
    this.news=new News();
  }

  ngOnInit() {
    this.parm=this.routerinfo.snapshot.params['id'];

    if(this.parm){
      this.getSingleNews(this.parm);
    }
    else{

      alert("参数异常，请刷新后重试");
      this.goBack();
    }


}

  

goBack(){

  this.router.navigate(['newslistforuser']);

  }
  
  private getSingleNews(id:string){
    this.newsservice.getSingleNews(id)
    .then((data:News)=>{
     if(data){
    this.news=data;

     }
     else{

       alert("参数异常，请刷新后重试");
     }




    })


  }

}