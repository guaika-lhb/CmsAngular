import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from './config.service';
import { Book } from '../model/book';
import { b } from '@angular/core/src/render3';
import { Student } from '../model/Student';
import { Classroom } from '../model/classroom';
import { Teacher } from '../model/teacher';
import { CourseResult } from '../model/courseresult';

@Injectable()
export class CourseService {

  constructor(private http:HttpClient
    ,private config:ConfigService) { }



    private addBookUrl = this.config.host +"/manage/addBook";
    addBook(book:Book){

     return this.http.post(this.addBookUrl,book).toPromise();

    }

    private deleteBookUrl = this.config.host+ "/manage/deleteBook";
    deleteBook(book:Book){
      return this.http.post(this.deleteBookUrl,book).toPromise();
    }

    private updateBookUrl = this.config.host+ "/manage/updateBook";
    updateBook(book:Book){
      return this.http.post(this.updateBookUrl,book).toPromise();
    }

    private getOneBookUrl = this.config.host+ "/manage/getOneBook";
    getOneBook(book:Book){
      return this.http.post(this.getOneBookUrl,book).toPromise();
    }

    public getBookListUrl = this.config.host+"/public/getBookList";
    getBookList(){
      return this.http.get(this.getBookListUrl).toPromise();
    }

    //班级
    private addStudentUrl = this.config.host +"/manage/addStudent";
    addStudent(student:Student){

     return this.http.post(this.addStudentUrl,student).toPromise();

    }

    private deleteStudentUrl = this.config.host+ "/manage/deleteStudent";
    deleteStudent(student:Student){
      return this.http.post(this.deleteStudentUrl,student).toPromise();
    }

    private updateStudentUrl = this.config.host+ "/manage/updateStudent";
    updateStudent(student:Student){
      return this.http.post(this.updateStudentUrl,student).toPromise();
    }

    private getOneStudentUrl = this.config.host+ "/manage/getOneStudent";
    getOneStudent(student:Student){
      return this.http.post(this.getOneStudentUrl,student).toPromise();
    }

    public getStudentListUrl = this.config.host+"/public/getStudentList";
    getStudentList(){
      return this.http.get(this.getStudentListUrl).toPromise();
    }


  //教室
  private addClassroomUrl = this.config.host +"/manage/addClassroom";
    addClassroom(classroom:Classroom){

     return this.http.post(this.addClassroomUrl,classroom).toPromise();

    }

    private deleteClassroomUrl = this.config.host+ "/manage/deleteClassroom";
    deleteClassroom(classroom:Classroom){
      return this.http.post(this.deleteClassroomUrl,classroom).toPromise();
    }

    private updateClassroomUrl = this.config.host+ "/manage/updateClassroom";
    updateClassroom(classroom:Classroom){
      return this.http.post(this.updateClassroomUrl,classroom).toPromise();
    }

    private getOneClassroomUrl = this.config.host+ "/manage/getOneClassroom";
    getOneClassroom(classroom:Classroom){
      return this.http.post(this.getOneClassroomUrl,classroom).toPromise();
    }

    public getClassroomListUrl = this.config.host+"/public/getClassroomList";
    getClassroomList(){
      return this.http.get(this.getClassroomListUrl).toPromise();
    }

    


    //教师
    private addTeacherUrl = this.config.host +"/manage/addTeacher";
    addTeacher(teacher:Teacher){

     return this.http.post(this.addTeacherUrl,teacher).toPromise();

    }

    private deleteTeacherUrl = this.config.host+ "/manage/deleteTeacher";
    deleteTeacher(teacher:Teacher){
      return this.http.post(this.deleteTeacherUrl,teacher).toPromise();
    }

    private updateTeacherUrl = this.config.host+ "/manage/updateTeacher";
    updateTeacher(teacher:Teacher){
      return this.http.post(this.updateTeacherUrl,teacher).toPromise();
    }

    private getOneTeacherUrl = this.config.host+ "/manage/getOneTeacher";
    getOneTeacher(teacher:Teacher){
      return this.http.post(this.getOneTeacherUrl,teacher).toPromise();
    }

    public getTeacherListUrl = this.config.host+"/public/getTeacherList";
    getTeacherList(){
      return this.http.get(this.getTeacherListUrl).toPromise();
    }



   private getCourseListByParmUrl = this.config.host + "/public/getCourseListByParm";
   getCourseListByParm(key:string,value:string){
    let parm= {
      "key":key,
      "value":value
    }

    return this.http.post(this.getCourseListByParmUrl,parm).toPromise();






   }



   private addCourseUrl = this.config.host +"/manage/addCourse";
   addCourse(course:CourseResult){
     return this.http.post(this.addCourseUrl,course).toPromise();
   }



}