import { Component, OnInit } from '@angular/core';
import { Feedback } from '../feedback';
import { FeedbackService } from '../feedback.service';

@Component({
  selector: 'app-allfeedback',
  templateUrl: './allfeedback.component.html',
  styleUrls: ['./allfeedback.component.css']
})
export class AllfeedbackComponent implements OnInit {
  feedbacks:Feedback;
  name:string;
  constructor(private srv:FeedbackService) { 
  this.feedbacks=new Feedback(0,"","","");
  }

  ngOnInit() {
    this.srv.getFeedback().subscribe(
      usr=>{
        this.feedbacks=usr;
      }
    );
    function getdata()
    {
      this.name="hello";

    }

  }

}
