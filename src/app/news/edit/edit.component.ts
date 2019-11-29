import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../service/news.service';
import { Router, ActivatedRoute } from '@angular/router';
import { News } from '../../model/news';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  [x: string]: any;
  parm:string;
  news:News;
  config:any;
  uploadurl:string;

  constructor(
    private newsservice:NewsService,
    private router:Router
  ,private routerinfo:ActivatedRoute
  ) {
    this.parm=this.routerinfo.snapshot.params['id'];
   }

  ngOnInit() {
    if(this.parm=='add'){

      this.news=new News();
      this.uploadurl="https:/localhost/manage/ckeditorUpload";
      this.config={
        filebrowserImageUploadUrl:this.uploadurl,
        filebrowserUploadMethod : 'xhr',
        //编辑器图片上传时加入令牌环
        fileTools_requestHeaders : {
          'X-Requested-With': 'XMLHttpRequest',
          'Authorization':localStorage.getItem("token")
        }
      }
  
  
     }
    
     else{
  
      this.getSingleNews(this.parm);
     }
  
  
  
  
    }
  
    goBack(){
      this.router.navigate(['listnews']);
    }
  save(){
    console.dir(this.news);
      
     if(this.parm=='add'){

      this.addNews();
     }
     else{
       this.updateNews();
     }




   }

  private addNews(){

    this.newsservice.addNews(this.news)
    .then((flag:boolean)=>{
     if(flag==true){
       this.goBack();
     }
     else{
       alert('保存异常，请刷新后重试');
     }



    })


   }

   private updateNews(){
    this.newsservice.updateNews(this.news)
    .then((flag)=>{
     if(flag==true){
       this.goBack();
     }
     else{
       alert('保存异常，请刷新后重试');

     }



    })



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