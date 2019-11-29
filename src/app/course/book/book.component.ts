import { Component, OnInit } from '@angular/core';
import { Book } from '../../model/book';
import { CourseService } from '../../service/course.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  b:Book;
  bl:Array<Book>

  constructor(private courseservice:CourseService) {
    this.b= new Book();
   }

  ngOnInit() {
    this.loadBookList();
  }

  addBook(){
    this.b =new Book();
  }

  save(){

    if(this.b.id){
      this.update();
    }
    else{
      this.add();
    }

  }


  add(){
   this.courseservice.addBook(this.b)
   .then((flag:boolean)=>{

   if(flag== true){
     this.b =new Book();
     this.loadBookList()
   }
   else{
     alert("添加异常，请重试");
   }

   })



  }

  update(){

    this.courseservice.updateBook(this.b)
    .then((flag:boolean)=>{
     if(flag == true){
       this.b= new Book();
       this.loadBookList();
     }
     else{
       alert("修改异常，请重试");
     }

    })

  }


  toupdate(x:Book){
    this.b=x;
  }


  deleteBook(x:Book){
   this.courseservice.deleteBook(x)
   .then((flag:boolean)=>{

    if(flag == true){
      this.loadBookList();
    }
    else{

      alert("删除异常，请重试");
    }

   })

  }


  loadBookList(){
    this.bl= new Array();
    this.courseservice.getBookList()
    .then((data:any)=>{

      this.bl = data;


    })


  }



}