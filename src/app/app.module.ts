import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS }    from '@angular/common/http';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ConfigService } from './service/config.service';
import { NewsService } from './service/news.service';
import { NewslistComponent } from './news/newslist/newslist.component';
import { EditComponent } from './news/edit/edit.component';
import { CKEditorModule } from 'ng2-ckeditor';
import { TohtmlPipe } from './pipe/tohtml.pipe';
import { DetailComponent } from './news/detail/detail.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { NewslistforuserComponent } from './news/newslistforuser/newslistforuser.component';
import { ForshowComponent } from './carousel/forshow/forshow.component';
import { UploadComponent } from './carousel/upload/upload.component';
import { IndexComponent } from './bs/index/index.component';
import { EidtcarouselComponent } from './carousel/eidtcarousel/eidtcarousel.component';
import { CarouselService } from './service/carousel.service';
import { SinglepagelistComponent } from './singlepage/singlepagelist/singlepagelist.component';
import { ShowsinglepageComponent } from './singlepage/showsinglepage/showsinglepage.component';
import { EditsinglepageComponent } from './singlepage/editsinglepage/editsinglepage.component';
import { SinglepageService } from './service/singlepage.service';
import { LoginComponent } from './login/login.component';
import { AuthService } from './service/auth.service';
import { Interceptor } from './service/interceptor.service';
import { AdminGuard } from './guard/admin.guard';
import { CourseindexComponent } from './course/courseindex/courseindex.component';
import { BookComponent } from './course/book/book.component';
import { ClassroomComponent } from './course/classroom/classroom.component';
import { TeacherComponent } from './course/teacher/teacher.component';
import { StudentComponent } from './course/student/student.component';
import { CourseService } from './service/course.service';
import { SchedulingComponent } from './course/scheduling/scheduling.component';






export const ROUTES: Routes = [
  {path:'listnews',component:NewslistComponent},
{path:'eidtnews/:id',component:EditComponent},
{path:'detail/:id',component:DetailComponent},
{path:'newslistforuser',component:NewslistforuserComponent},
{path:'showcarousel',component:ForshowComponent},
{path:'uploadfile',component:UploadComponent},
{path:'index',component:IndexComponent},
{path:'eidtCarousel/:id',component:EidtcarouselComponent},
{path:'editsinglepage/:id',component:EditsinglepageComponent},
{path:'showsinglepage',component:ShowsinglepageComponent},
{path:'singlepagelist',component:SinglepagelistComponent},
{path:'forshow',component:ForshowComponent},
{path:'courseindex',component:CourseindexComponent},
{path:'login',component:LoginComponent},
{path:'book',component:BookComponent},
{path:'student',component:StudentComponent},
{path:'classroom',component:ClassroomComponent},
{path:'teacher',component:TeacherComponent},
{path:'scheduling',component:SchedulingComponent},
{path:'**',component:LoginComponent},


];


@NgModule({
  declarations: [
    AppComponent,
    NewslistComponent,
    EditComponent,
    TohtmlPipe,
    DetailComponent,
    NewslistforuserComponent,
    ForshowComponent,
    UploadComponent,
    IndexComponent,
    EidtcarouselComponent,
    SinglepagelistComponent,
    EditsinglepageComponent,
    ShowsinglepageComponent,
    LoginComponent,
    CourseindexComponent,
    BookComponent,
    StudentComponent,
    ClassroomComponent,
    TeacherComponent,
    SchedulingComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(ROUTES),
    CKEditorModule,
    NgbModule
  ],
  providers: [
    ConfigService,
    NewsService,
    NgbCarouselConfig,
    CarouselService,
    SinglepageService,
    AuthService,
    { provide: HTTP_INTERCEPTORS, useClass: Interceptor, multi: true },
    AdminGuard,
    CourseService
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
