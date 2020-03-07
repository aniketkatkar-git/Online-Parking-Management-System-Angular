import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
/*export class CreateUserComponent implements OnInit {
  router: any;

  constructor(private service:UserService){}
  newuser:User=new User(0,"","","","","",0,"");
  message:any;

  ngOnInit() {
   
  }

  public nowRegister(){
    console.log(this.newuser.id);
    let response=this.service.userRegistration(this.newuser);
    response.subscribe((data)=>this.message=data);
       if(response)
        {
          alert("Registered Successfully");
          this.router.navigate(["/login"]);
        }
    }
}*/


export class CreateUserComponent implements OnInit {
  register:User;

  registerForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(
      private formBuilder: FormBuilder,
      
      private router: Router,
      private userService: UserService) { }

  ngOnInit() {
      this.registerForm = this.formBuilder.group({
          id:['',Validators.required],
          userName: ['', [Validators.required, Validators.maxLength(45)]],
          email: ['', Validators.required],
          password: ['', [Validators.required, Validators.minLength(6)]],
          contactNo: ['', [Validators.required, Validators.minLength(10)]],

          firstname:['',[Validators.required,Validators.maxLength(45)]],
          lastname:['',[Validators.required,Validators.maxLength(45)]],
          address: ['', Validators.required]
      });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
      this.submitted = true;
      //sessionStorage.setItem('userName',userName);

      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
      }

      this.loading = true;
      this.userService.userRegistration(this.registerForm.value)
          .pipe()
          .subscribe(
              data => {
                  console.log(data);
                  alert("Registration Successfull!!")
                  this.router.navigate(['/login']);
              }
  
          )
}
}
