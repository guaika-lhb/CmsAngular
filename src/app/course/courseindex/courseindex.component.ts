import { Component, OnInit } from '@angular/core';
import { Carousel } from '../../model/carousel';
import { Course } from '../../model/course';
import { Student } from '../../model/Student';
import { Classroom } from '../../model/classroom';
import { Book } from '../../model/book';
import { Teacher } from '../../model/teacher';
import { CourseService } from '../../service/course.service';
import { CourseResult } from '../../model/courseresult';

@Component({
  selector: 'app-courseindex',
  templateUrl: './courseindex.component.html',
  styleUrls: ['./courseindex.component.css']
})
export class CourseindexComponent implements OnInit {
  cl:Array<Course>
  sl:Array<Student>
  bl:Array<Book>
  rl:Array<Classroom>
  hl:Array<Teacher>


  constructor(private courseservice:CourseService) { }

  ngOnInit() {

    this.initCourse();
    this.initStudent();
    this.initBook();
    this.initClassroom();
    this.initTeacher();
  }

  initCourse(){
  this.cl=new Array();
  for(let i=0;i<25;i++){
    let c =new Course()
    c.id=i;
    this.cl.push(c);


   }
  }

  setCourse(searchresult:Array<CourseResult>){

    for(let x of searchresult){
      let t = new Course();
      t.classroom= x.classroom
      t.id=x.cid
      t.name= x.name
      t.student= x.student
      t.teacher= x.teacher
      this.cl[x.cid]=t;

    }

  }
//初始化班级信息
  initStudent(){
    this.sl = new Array();
    this.courseservice.getStudentList()
    .then((data:any)=>{
      this.sl= data;
    })
 }

initBook(){
  this.bl = new Array();
   this.courseservice.getBookList()
   .then((data:any)=>{
     this.bl= data;
   })
}

initClassroom(){
  this.rl = new Array();
   this.courseservice.getClassroomList()
   .then((data:any)=>{
     this.rl= data;
   })
}

initTeacher(){
  this.hl = new Array();
   this.courseservice.getTeacherList()
   .then((data:any)=>{
     this.hl= data;
   })
}


 onStudentSelect(s:Student){

  console.dir(s);
  this.courseservice.getCourseListByParm('student',s.name)
  .then((data:any)=>{

  console.dir(data);
 this.setCourse(data);
  })
 }

 onBookSelect(b:Book){

  console.dir(b);
  this.courseservice.getCourseListByParm('book',b.id)
  .then((data:any)=>{

  console.dir(data);
 this.setCourse(data);
  })
 }

 onClassroomSelect(r:Classroom){

  console.dir(r);
  this.courseservice.getCourseListByParm('classroom',r.name)
  .then((data:any)=>{

  console.dir(data);
 this.setCourse(data);
  })
 }

 onTeacherSelect(h:Teacher){
  console.dir(h);
  this.courseservice.getCourseListByParm('teacher',h.name)
  .then((data:any)=>{

  console.dir(data);
 this.setCourse(data);
  })
 }



}