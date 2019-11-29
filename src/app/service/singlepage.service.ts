import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from './config.service';
import { Singlepage } from '../model/singlepage';

@Injectable()
export class SinglepageService {

  constructor(private http:HttpClient,
    private config:ConfigService) { }





    private   addSinglepageUrl=this.config.host+"/manage/addSinglepage";
    addSinglepage(singlepage:Singlepage){
    return this.http.post(this.addSinglepageUrl,singlepage).toPromise();
    }





    private deleteSinglepageUrl=this.config.host+"/manage/deleteSinglepage";
    deleteSinglepage(id:string){
  let p={
    "singlepageid":id
  }
  return this.http.post(this.deleteSinglepageUrl,p).toPromise();
}




private  getSinglepageListUrl=this.config.host+"/manage/getSinglepageList";
getSinglepageList(){
  return this.http.get(this.getSinglepageListUrl).toPromise();
}





private getSinglepageUrl=this.config.host+"/manage/getSinglepage";
getSinglepage(id:string){
let p={
  "singlepageid":id
}
return this.http.post(this.getSinglepageUrl,p).toPromise();
}


private updateSinglepageUrl=this.config.host+"/manage/updateSinglepage";
updateSinglepage(singlepage:Singlepage){
  let p={
  "singlepageid":singlepage.singlepageid,
   "title":singlepage.title,
   "summary":singlepage.summary,
   "img":singlepage.img,
   "detail":singlepage.detail
  }
  return this.http.post(this.updateSinglepageUrl,p).toPromise();
}




}