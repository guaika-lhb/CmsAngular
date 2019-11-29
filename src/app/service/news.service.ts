import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ConfigService } from './config.service';
import { News } from '../model/news';

@Injectable()
export class NewsService {

  constructor(private http:HttpClient
    ,private config:ConfigService) { }

    private getNewsListUrl=this.config.host+"/manage/getNewsList";
    getNewsList(){
      return this.http.get(this.getNewsListUrl).toPromise();
    }
    private addNewsUrl=this.config.host+"/manage/addNews";

    addNews(news:News){
      
     let p={
       "title":news.title,
 "content":news.content,
 "author":news.author,
 "px":news.px
     }


     return this.http.post(this.addNewsUrl,p).toPromise();

    }


    private deleteNewsUrl=this.config.host+"/manage/deleteNews";

    deleteNews(id:string){
     let p={
      newsid:id
     }

     return this.http.post(this.deleteNewsUrl,p).toPromise();

    }

    private getSingleNewsUrl=this.config.host+"/manage/getSingleNews";

    getSingleNews(id:string){
     let p={
       "newsid":id
     }

     return this.http.post(this.getSingleNewsUrl,p).toPromise();


    }

    private updateNewsUrl=this.config.host+"/manage/updateNews";

     updateNews(news:News){
     let p={
      "newsid": news.newsid,
      "title": news.title,
      "pbdate":news.pbdate,
      "content": news.content,
      "author": news.author,
      "px": news.px
     }

     return this.http.post(this.updateNewsUrl,p).toPromise();


     }

     private uploadNewsCoverPicUrl=this.config.host+"/manage/uploadNewsCoverpic";

     uploadNewsCoverPic(newsid:string,file:string){

      const httpOptions = {
        headers: new HttpHeaders({
          'newsid':  newsid
        })
      };


      const uploadData = new FormData();
      uploadData.append('file', file);

       return this.http.post(this.uploadNewsCoverPicUrl,uploadData,httpOptions).toPromise();


     }


}


