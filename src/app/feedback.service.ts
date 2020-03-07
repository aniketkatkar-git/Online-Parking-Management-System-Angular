import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private http:HttpClient) { }

  
  getFeedback():any

  {
    return this.http.get<any>("http://localhost:8989/feedback/getAllFeedbacks").pipe(
      tap(feedbacks=>{
        console.log('fetch data'+feedbacks);
      })

    )

  }
}
