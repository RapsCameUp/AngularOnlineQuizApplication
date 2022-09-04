import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Answers } from '../models/answers';
import { Questions } from '../models/questions';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  questions: Array<Questions> = []
  answers: Array<Answers> = [];
  quizAnswer = new Map();

  display1: boolean = true;
  display2: boolean = false;
  display3: boolean = false;
  display4: boolean = false;
  count: number = 0;

  constructor(public http: HttpClient) { }

  ngOnInit(): void {
    this.startTest();
  }

  startTest() {
    this.http.get("/assets/questions.json").subscribe((data: any) => this.questions = data.questions);
    this.http.get("/assets/answers.json").subscribe((data: any) => this.answers = data.answers);
  }

  UserAnswers(id: any, ans: any) {
    this.quizAnswer.set(id, ans);
  }

  submitTest() {
    this.display2 = true;
    this.display1 = false;
  }

  UserTestReview() {
    this.display3 = true;
  }

  userTestResults() {
    for (let i = 0; i < this.questions.length; i++) {
      if (this.answers[i].correctAnswer == this.quizAnswer.get(i + 1)) {
        this.count++;
      }
    }
    this.display4 = true;
    this.display3 = false;
  }

}
