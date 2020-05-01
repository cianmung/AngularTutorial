import { EmployeeModule } from "./employee/employee.module";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { MyComponentComponent } from "./my-component/my-component.component";
import { FormsModule } from "@angular/forms";
import { StudentListComponent } from "./student-list/student-list.component";
import { StudentCountComponent } from "./student-count/student-count.component";
import { NgSwtichTutorialComponent } from "./ng-swtich-tutorial/ng-swtich-tutorial.component";
import { NgForTutorialComponent } from "./ng-for-tutorial/ng-for-tutorial.component";
import { NgForTrackbyTutorialComponent } from "./ng-for-trackby-tutorial/ng-for-trackby-tutorial.component";
import { NgIfTutorialComponent } from "./ng-if-tutorial/ng-if-tutorial.component";
import { NgStyleTutorialComponent } from "./ng-style-tutorial/ng-style-tutorial.component";
import { NgClassTutorialComponent } from "./ng-class-tutorial/ng-class-tutorial.component";
import { NgPipesTutorialComponent } from "./ng-pipes-tutorial/ng-pipes-tutorial.component";
import { NgParameterizedPipesTutorialComponent } from "./ng-parameterized-pipes-tutorial/ng-parameterized-pipes-tutorial.component";
import { MyTitlePipe } from "./ng-pipes-tutorial/my-title.pipe";
import { StudentComponent } from './student/student.component';
import { StudentdetailComponent } from './studentdetail/studentdetail.component';
import { AppRoutingModule } from './app-routing.module';
import { NgRoutingTutorialComponent } from './ng-routing-tutorial/ng-routing-tutorial.component';
import { LoginComponent } from './login/login.component';
import { CustomerrorComponent } from './customerror/customerror.component';
import { NgServiceTutorialComponent } from './ng-service-tutorial/ng-service-tutorial.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    StudentCountComponent,
    NgSwtichTutorialComponent,
    NgForTutorialComponent,
    NgForTrackbyTutorialComponent,
    NgIfTutorialComponent,
    NgStyleTutorialComponent,
    NgClassTutorialComponent,
    NgPipesTutorialComponent,
    NgParameterizedPipesTutorialComponent,
    MyTitlePipe,
    StudentComponent,
    StudentdetailComponent,
    NgRoutingTutorialComponent,
    LoginComponent,
    CustomerrorComponent,
    NgServiceTutorialComponent,
  ],
  imports: [BrowserModule, EmployeeModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
