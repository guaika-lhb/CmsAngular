import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../service/news.service';
import { News } from '../../model/news';
import { Router, ActivatedRoute } from '@angular/router';
import { ConfigService } from '../../service/config.service';

@Component({
  selector: 'app-newslist',
  templateUrl: './newslist.component.html',
  styleUrls: ['./newslist.component.css']
})
export class NewslistComponent implements OnInit {
  nl:Array<News>;
  HOST:string;
  constructor(
    private newsservice:NewsService,
    private router:Router
  ,private routerinfo:ActivatedRoute
  ,private config:ConfigService
  ) { 
    this.HOST=config.host+"/public/"
  }

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

    addNews(){
      this.router.navigate(['eidtnews','add']);
 
     }
 
     updateNews(id:string){
 
       this.router.navigate(['eidtnews',id]);
 
 
     }

     deleteNews(id:string){

      this.newsservice.deleteNews(id)
      .then((flag:boolean)=>{
       if(flag==true){
    this.loadNewsList();


       }
       else{

        alert("删除异常，请刷新后重试");
       }



      })



    }


    toDetail(id:string){

    this.router.navigate(['detail',id]);

    }

    selectedFile: string;
 
  onFileChanged(event) {
    this.selectedFile = event.target.files[0];
  }

  uploadNewsCover(newsid:string){


    this.newsservice.uploadNewsCoverPic(newsid,this.selectedFile)
    .then((data:any)=>{
 
 
    if(data.filename){
      this.loadNewsList()
    }
 
 
    })
 
 
   }
 
 
 
 }