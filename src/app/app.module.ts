import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CreateManagerComponent } from './create-manager/create-manager.component';
import { ManagerService } from './manager.service';
import { HttpClientModule } from '@angular/common/http';
import { CreateUserComponent } from './create-user/create-user.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { HomePageComponent } from './home-page/home-page.component';
import { UserService } from './user.service';
import { CreateOwnerComponent } from './create-owner/create-owner.component';
import { LoginOwnerComponent } from './login-owner/login-owner.component';
import { OwnerService } from './owner.service';
import { BookingComponent } from './booking/booking.component';
import { AllcityComponent } from './allcity/allcity.component';
import { CityService } from './city.service';
import { CreateRequestComponent } from './create-request/create-request.component';
import { RequestService } from './request.service';
import { UpdateUserComponent } from './update-user/update-user.component';
import { LoginManagerComponent } from './login-manager/login-manager.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { AdminService } from './admin.service';
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

@NgModule({
  declarations: [
    AppComponent,
    CreateManagerComponent,
    CreateUserComponent,
    LoginUserComponent,
    HomePageComponent,
    CreateOwnerComponent,
    LoginOwnerComponent,
    BookingComponent,
    AllcityComponent,
    CreateRequestComponent,
    UpdateUserComponent,
    LoginManagerComponent,
    LoginAdminComponent,
    HomeAdminComponent,
    AllmanagerComponent,
    AlluserComponent,
    AllownerComponent,
    AllfeedbackComponent,
    AllrequestComponent,
    HomemanagerComponent,
    UpdatemanagerComponent,
    UpdateownerComponent,
    HomeownerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [UserService,ManagerService,OwnerService,CityService,RequestService,AdminService],
  bootstrap: [AppComponent]
})
export class AppModule { }