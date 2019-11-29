import { Component, OnInit } from '@angular/core';
import { Course } from '../../model/course';
import { Student } from '../../model/Student';
import { Book } from '../../model/book';
import { Classroom } from '../../model/classroom';
import { Teacher } from '../../model/teacher';
import { CourseService } from '../../service/course.service';
import { CourseResult } from '../../model/courseresult';
import { Router } from '@angular/router';

@Component({
  selector: 'app-scheduling',
  templateUrl: './scheduling.component.html',
  styleUrls: ['./scheduling.component.css']
})
export class SchedulingComponent implements OnInit {
  cl:Array<Course>
  sl:Array<Student>
  bl:Array<Book>
  rl:Array<Classroom>
  hl:Array<Teacher>
  tosavecourse:CourseResult

  constructor(private courseservice:CourseService
    ,private router:Router
    ) { 
    this.tosavecourse = new CourseResult();
  }

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
  

   save(){
    console.dir(this.tosavecourse);
  this.courseservice.addCourse(this.tosavecourse).then
  ((flag:boolean)=>{
    if(flag==true){
      this.back();
    }
    else{
alert("添加失败，请重试");
    }
  })
  }

  back(){
    this.router.navigate(['scheduling']);
  }


   onGridSelect(cid:number){

    alert("你选中了"+cid)

    this.tosavecourse.cid = cid
   }


   onStudentValueSelect(s:Student){

    this.tosavecourse.student = s.name
    this.tosavecourse.name = s.name
   }

   onBookValueSelect(b:Book){

    this.tosavecourse.book = b.id
    this.tosavecourse.name = b.name
   }

   onClassroomValueSelect(r:Classroom){

    this.tosavecourse.classroom = r.name
    this.tosavecourse.name = r.name
   }
   
   onTeacherValueSelect(h:Teacher){

    this.tosavecourse.teacher = h.name
    this.tosavecourse.name = h.name
   }
}
  
  
  