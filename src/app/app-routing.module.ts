import { CustomerrorComponent } from "./customerror/customerror.component";
import { LoginComponent } from "./login/login.component";
import { StudentdetailComponent } from "./studentdetail/studentdetail.component";
import { StudentComponent } from "./student/student.component";
import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";

const routes: Routes = [
  {
    path: "studentLink",
    component: StudentComponent,
  },
  {
    path: "studentdetailLink",
    component: StudentdetailComponent,
  },
  {
    path: "Login",
    component: LoginComponent,
  },
  {
    path: "",
    redirectTo: "Login",
    pathMatch: "full",
  },
  {
    path: "**",
    component: CustomerrorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
