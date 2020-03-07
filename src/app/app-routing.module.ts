import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateManagerComponent } from './create-manager/create-manager.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CreateOwnerComponent } from './create-owner/create-owner.component';
import { LoginOwnerComponent } from './login-owner/login-owner.component';
import { BookingComponent } from './booking/booking.component';
import { CreateRequestComponent } from './create-request/create-request.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { LoginManagerComponent } from './login-manager/login-manager.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { AllmanagerComponent } from './allmanager/allmanager.component';
import { AlluserComponent } from './alluser/alluser.component';
import { AllownerComponent } from './allowner/allowner.component';
import { AllfeedbackComponent } from './allfeedback/allfeedback.component';
import { AllrequestComponent } from './allrequest/allrequest.component';
import { HomemanagerComponent } from './homemanager/homemanager.component';
import { UpdatemanagerComponent } from './updatemanager/updatemanager.component';
import { UpdateownerComponent } from './updateowner/updateowner.component';
import { HomeownerComponent } from './homeowner/homeowner.component';




const routes: Routes = [
  {path:'newmanager',component:CreateManagerComponent},
  {path:'user',component:CreateUserComponent},
  {path:'newowner',component:CreateOwnerComponent},
  {path:'login', component:LoginUserComponent},
  {path:'home',component:HomePageComponent},
  {path:'ownerlogin',component:LoginOwnerComponent},
  {path:'booking',component:BookingComponent},
  {path:'request',component:CreateRequestComponent},
  {path:'updateuser', component:UpdateUserComponent},
  {path:'manager', component:LoginManagerComponent},
  {path:'admin', component:LoginAdminComponent},
  {path:'homeadmin',component:HomeAdminComponent},
  {path:'allManager',component:AllmanagerComponent},
  {path:'allUser',component:AlluserComponent},
  {path:'allowner',component:AllownerComponent},
  {path:'allfeedback',component:AllfeedbackComponent},
  {path:'allrequest',component:AllrequestComponent},
  {path:'homemanager',component:HomemanagerComponent},
  {path:'updateManager',component:UpdatemanagerComponent},
  {path:'updateOwner',component:UpdateownerComponent},
  {path:'homeOwner',component:HomeownerComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
