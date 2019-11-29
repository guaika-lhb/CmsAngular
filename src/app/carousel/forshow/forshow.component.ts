import { Component, OnInit } from '@angular/core';
import { Carousel } from '../../model/carousel';
import { CarouselService } from '../../service/carousel.service';

@Component({
  selector: 'app-forshow',
  templateUrl: './forshow.component.html',
  styleUrls: ['./forshow.component.css']
})
export class ForshowComponent implements OnInit {
  cl:Array<Carousel>;

  //images:Array<string>;
  constructor(private carouselservice:CarouselService) { 
    this.cl=new Array();
  //  this.cl=new Array();
  //     this.cl=new Array();
 //  for(let i=0;i<3;i++){
  //    let c=new Carousel();
  //     c.carouselid="id"+i;
  //    c.content="content"+i;
  //    c.title="title"+i;
  //     c.discription="description"+i;
  //     c.pic="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1544418803748&di=b61c23dad75d43a9c2ddf27e523c58c1&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201407%2F23%2F20140723083033_jwNEm.png";

 //this.cl.push(c);
  // }
  }

  ngOnInit() {

    //this. images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
   // this.images=new Array();
   // this.images.push('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1544418803748&di=b61c23dad75d43a9c2ddf27e523c58c1&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201407%2F23%2F20140723083033_jwNEm.png');
  //  this.images.push('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1544418846954&di=613beb3e12ca0a3399997bd6f2a360d5&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20181114%2F5777726ea7a846cab3f98447bc04ec83.jpeg');
  // this.images.push('http://dingyue.nosdn.127.net/QB5hkqAzUgy4XhFgMhThKz8yx6RMy5LPoz234S=1GytEw1536935641168compressflag.jpg');

  this.cl=new Array();
   this.carouselservice.getCarouselList()
   .then((data:any)=>{
this.cl=data;
console.log(this.cl[0].pic);

   })



}

}