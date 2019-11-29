import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';
import { HttpClient } from '@angular/common/http';
import { Carousel } from '../model/carousel';

@Injectable()
export class CarouselService {

  constructor(
    private  http:HttpClient,
    private config:ConfigService) { }

    private   addCarouselUrl=this.config.host+"/manage/addCarousel";
addCarousel(carousel:Carousel){

return this.http.post(this.addCarouselUrl,carousel).toPromise();

}

private  getCarouselListUrl=this.config.host+"/manage/getCarouselList";
getCarouselList(){

  return this.http.get(this.getCarouselListUrl).toPromise();
}

private deleteCarouselUrl=this.config.host+"/manage/deleteCarousel";

deleteCarousel(id:string){
     let p={
      carouselid:id
     }

     return this.http.post(this.deleteCarouselUrl,p).toPromise();

    }

    
    private getCarouselUrl=this.config.host+"/manage/getCarousel";
    getCarousel(id:string){
      let p={
        "carouselid":id
      }
 
      return this.http.post(this.getCarouselUrl,p).toPromise();
 
 
   }
 
 
      private updateCarouselUrl=this.config.host+"/manage/updateCarousel";
 
      updateCarousel(carousel:Carousel){
      let p={
       "carouselid": carousel.carouselid,
       "title": carousel.title,
       "pic":carousel.pic,
       "content": carousel.content,
      "discription":carousel.discription
       
      }
 
      return this.http.post(this.updateCarouselUrl,p).toPromise();
 
 
      }
 




}